import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  HostListener,
  inject,
  input,
  signal,
  viewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChevronDown, LucideAngularModule } from 'lucide-angular';
import { ButtonComponent } from '@amalihomes/shared';
import { Filter } from '../../../logic/data/constants/filters';
import { Store } from '@ngrx/store';
import { interactionsActions } from '../../../logic/stores/actions/interactions.action';
import { selectFilterationKeywords } from '../../../logic/stores/selectors/interactions.selector';

@Component({
  selector: 'app-filters',
  imports: [CommonModule, LucideAngularModule, ButtonComponent],
  templateUrl: './filters.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FiltersComponent implements AfterViewInit {
  private readonly store = inject(Store);
  private readonly filterValues = this.store.selectSignal(selectFilterationKeywords);
  public readonly filteringOptions = input<Filter[]>();
  public readonly title = input<string>();
  public readonly type = input<'checks' | 'radio' | 'range'>('checks');
  protected readonly sliderContainer = viewChild<ElementRef>('sliderContainer');
  protected readonly selectedCategories = signal<string[]>([]);
  protected readonly icons = { ChevronDown };
  protected readonly isOpen = signal(true);
  protected readonly leftHandlePosition = signal(0);
  protected readonly rightHandlePosition = signal(100);
  protected readonly progressLeft = signal(0);
  protected readonly progressWidth = signal(100);
  protected readonly filterGroup = computed(() => {
    if (this.title() === 'Sorting') return 'sort';
    else return this.title()?.split(' ')[0].toLowerCase() ?? '';
  });

  protected readonly isDragging = signal(false);
  protected readonly currentHandle = signal<'left' | 'right' | null>(null);
  private readonly maxPrice = 5000;

  ngAfterViewInit(): void {
    this.updateProgressBar();
  }

  protected selectedSort(): string | null {
    const sortFilter = this.filterValues().find((f) => f.filterBy === 'sort');
    return sortFilter?.value[0] ?? null;
  }

  protected startDrag(event: MouseEvent, handle: 'left' | 'right'): void {
    event.preventDefault();
    this.isDragging.set(true);
    this.currentHandle.set(handle);
    this.onDrag(event);
  }

  @HostListener('document:mousemove', ['$event'])
  protected onDrag(event: MouseEvent): void {
    if (!this.isDragging() || !this.currentHandle() || !this.sliderContainer) return;

    const rect = this.sliderContainer()?.nativeElement.getBoundingClientRect();
    let position = ((event.clientX - rect.left) / rect.width) * 100;

    position = Math.max(0, Math.min(100, position));

    if (this.currentHandle() === 'left') {
      position = Math.min(position, this.rightHandlePosition() - 1);
      this.leftHandlePosition.set(position);
    } else {
      position = Math.max(position, this.leftHandlePosition() + 1);
      this.rightHandlePosition.set(position);
    }

    this.updateProgressBar();
  }

  @HostListener('document:mouseup')
  protected stopDrag(): void {
    this.isDragging.set(false);
    this.currentHandle.set(null);
  }

  protected updateProgressBar(): void {
    const left = Math.min(this.leftHandlePosition(), this.rightHandlePosition());
    const right = Math.max(this.leftHandlePosition(), this.rightHandlePosition());

    this.progressLeft.set(left);
    this.progressWidth.set(right - left);

    this.store.dispatch(
      interactionsActions.updateFilterValues({
        filterBy: 'min-price',
        keyword: this.getFormattedMinPrice(),
        action: 'sort',
      }),
    );

    this.store.dispatch(
      interactionsActions.updateFilterValues({
        filterBy: 'max-price',
        keyword: this.getFormattedMaxPrice(),
        action: 'sort',
      }),
    );
  }

  protected getMinPrice(): number {
    return Math.round((this.leftHandlePosition() / 100) * this.maxPrice);
  }

  protected getMaxPrice(): number {
    return Math.round((this.rightHandlePosition() / 100) * this.maxPrice);
  }

  protected getFormattedMinPrice(): string {
    return this.getMinPrice().toLocaleString();
  }

  protected getFormattedMaxPrice(): string {
    return this.getMaxPrice().toLocaleString();
  }

  protected onToggle() {
    this.isOpen.update((prev) => !prev);
  }

  protected handleFilterChange(event: Event, filterBy: string) {
    const inputValue = event.target as HTMLInputElement;
    const keyword = inputValue.value;
    const checked = inputValue.checked;
    const inputType = inputValue.type;

    if (inputType === 'radio')
      this.store.dispatch(interactionsActions.updateFilterValues({ filterBy, keyword, checked: true, action: 'sort' }));
    else this.store.dispatch(interactionsActions.updateFilterValues({ filterBy, keyword, checked, action: 'filter' }));
  }
}
