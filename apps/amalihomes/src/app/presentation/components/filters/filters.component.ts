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

@Component({
  selector: 'app-filters',
  imports: [CommonModule, LucideAngularModule, ButtonComponent],
  templateUrl: './filters.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FiltersComponent implements AfterViewInit {
  private readonly store = inject(Store);
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
  protected readonly filterGroup = computed(() => this.title()?.split(' ')[0].toLowerCase() ?? '');

  protected readonly isDragging = signal(false);
  protected readonly currentHandle = signal<'left' | 'right' | null>(null);

  ngAfterViewInit(): void {
    this.updateProgressBar();
  }

  protected startDrag(event: MouseEvent, handle: 'left' | 'right'): void {
    event.preventDefault();
    this.isDragging.set(true);
    this.currentHandle.set(handle);
  }

  @HostListener('document:drag', ['$event'])
  protected onDrag(event: MouseEvent): void {
    if (!this.isDragging || !this.currentHandle || !this.sliderContainer) return;

    const rect = this.sliderContainer()?.nativeElement.getBoundingClientRect();
    let position = (event.clientX - rect.left) / rect.width;

    position = Math.max(0, Math.min(1, position));

    if (this.currentHandle() === 'left') {
      this.leftHandlePosition.set(position * 100);
    } else {
      this.rightHandlePosition.set(position * 100);
    }

    this.updateProgressBar();
  }

  @HostListener('document:drop')
  protected onDrop(): void {
    this.isDragging.set(false);
    this.currentHandle.set(null);
  }

  protected stopDrag(): void {
    this.isDragging.set(false);
    this.currentHandle.set(null);
  }

  protected updateProgressBar(): void {
    const start = Math.min(this.leftHandlePosition(), this.rightHandlePosition());
    const end = Math.max(this.leftHandlePosition(), this.rightHandlePosition());

    this.progressLeft.set(start);
    this.progressWidth.set(end - start);
  }

  protected getMinPrice(): number {
    const minPosition = Math.min(this.leftHandlePosition(), this.rightHandlePosition());
    return this.calculatePrice(minPosition);
  }

  protected getMaxPrice(): number {
    const maxPosition = Math.max(this.leftHandlePosition(), this.rightHandlePosition());
    return this.calculatePrice(maxPosition);
  }

  private calculatePrice(position: number): number {
    return (position / 100) * 5000;
  }

  protected onToggle() {
    this.isOpen.update((prev) => !prev);
  }

  protected handleFilterChange(event: Event, filterBy: string) {
    const filteredValue = event.target as HTMLInputElement;
    const keyword = filteredValue.value;
    const checked = filteredValue.checked;

    this.store.dispatch(interactionsActions.updateFilterValues({ filterBy, keyword, checked }));
  }
}
