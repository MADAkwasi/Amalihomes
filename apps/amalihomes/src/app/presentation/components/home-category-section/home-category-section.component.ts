import {
  AfterViewInit,
  Component,
  computed,
  ElementRef,
  inject,
  input,
  viewChild,
  ChangeDetectionStrategy,
  signal,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ArrowRight, ArrowLeft } from 'lucide-angular';
import { ApplicationStore } from '../../../logic/stores';
import { Store } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { ButtonComponent, ImageComponent, TextDirective } from '@amalihomes/shared';
import { selectHomePageSectionData } from '../../../logic/stores/selectors/home-page';

const DEFAULT_SCROLL_DISTANCE = 200;
const CARDS_GAP_DISTANCE = 16;

@Component({
  selector: 'app-home-category-section',
  imports: [CommonModule, LucideAngularModule, RouterModule, ButtonComponent, ImageComponent, TextDirective],
  templateUrl: './home-category-section.component.html',
  styleUrl: './home-category-section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeCategorySectionComponent implements AfterViewInit {
  @ViewChildren('cardElements') private readonly cardElements!: QueryList<ElementRef>;
  public readonly categoryType = input.required<'products' | 'arrivals'>();
  private readonly cardsContainerRef = viewChild<ElementRef<HTMLDivElement>>('cardsContainer');
  protected readonly icons = { ArrowLeft, ArrowRight };
  private readonly store = inject(Store<ApplicationStore>);
  protected readonly data = this.store.selectSignal(selectHomePageSectionData('categories'));
  protected readonly sectionData = computed(() => {
    const categories = this.data();

    if (!categories) return null;

    return categories.each.find((category) => category.key === this.categoryType());
  });
  protected disableScrollToLeftButton = false;
  protected disableScrollToRightButton = false;
  isLastCardVisible = signal(false);
  isAtStart = signal(true);

  public getProductItemLink(productId: string, productName: string) {
    return `/${this.categoryType()}/${productId}/${productName}`;
  }

  protected autoScroll(scrollTo: 'left' | 'right') {
    const cardsContainerElement = this.cardsContainerRef()?.nativeElement;

    if (!cardsContainerElement) return;

    const cardWidth = cardsContainerElement.firstElementChild?.clientWidth ?? DEFAULT_SCROLL_DISTANCE;
    const scrollDistance = cardWidth + CARDS_GAP_DISTANCE;

    cardsContainerElement.scrollBy({
      left: scrollTo === 'left' ? -scrollDistance : scrollDistance,
      behavior: 'smooth',
    });
  }

  ngAfterViewInit() {
    this.setupObserver();
  }

  setupObserver() {
    const observer = new IntersectionObserver(
      (entries) => {
        this.isLastCardVisible.set(entries.some((entry) => entry.isIntersecting));
      },
      { root: this.cardsContainerRef()?.nativeElement, threshold: 0.5 },
    );

    const cardsArray = this.cardElements.toArray();
    const lastCard = cardsArray[cardsArray.length - 1]?.nativeElement;
    if (lastCard) {
      observer.observe(lastCard);
    }
  }

  onScroll() {
    const container = this.cardsContainerRef()?.nativeElement as HTMLDivElement;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    this.isAtStart.set(container.scrollLeft === 0);
    this.isLastCardVisible.set(container.scrollLeft >= maxScrollLeft - 10);
  }

  scrollNext() {
    if (this.cardsContainerRef()) {
      this.cardsContainerRef()?.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
    }
  }

  scrollPrev() {
    if (this.cardsContainerRef()) {
      this.cardsContainerRef()?.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
    }
  }
}
