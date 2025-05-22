import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  inject,
  input,
  PLATFORM_ID,
  signal,
  viewChild,
  viewChildren,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Product } from '../../../types/chatbot';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ButtonComponent, TextDirective } from '@amalihomes/shared';
import { ArrowLeft, ArrowRight, LucideAngularModule } from 'lucide-angular';
import { RouterModule } from '@angular/router';

const DEFAULT_SCROLL_DISTANCE = 100;
const CARDS_GAP_DISTANCE = 8;

@Component({
  selector: 'app-exhibition-sliders',
  imports: [CommonModule, ProductCardComponent, ButtonComponent, TextDirective, LucideAngularModule, RouterModule],
  templateUrl: './exhibition-sliders.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExhibitionSlidersComponent implements AfterViewInit {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly cardElements = viewChildren<ElementRef>('cardElements');
  private readonly cardsContainerRef = viewChild<ElementRef<HTMLDivElement>>('cardsContainer');
  public readonly products = input.required<Product[]>();
  public readonly url = input.required<string>();
  public readonly hideTags = input<boolean>(false);
  public readonly routable = input<boolean>(true);
  public readonly title = input<string>();
  public readonly length = input<number>(6);
  public readonly description = input<string>();
  public readonly showDiscount = input<boolean>(false);
  protected readonly isViewExpanded = input<boolean>(false);
  protected readonly icons = { ArrowLeft, ArrowRight };
  protected readonly sliderProducts = computed(() => this.products().slice(0, this.length()));
  protected readonly isLastCardVisible = signal(false);
  protected readonly isAtStart = signal(true);

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.setupObserver();
    }
  }

  protected autoScroll(scrollTo: 'left' | 'right'): void {
    const cardsContainerElement = this.cardsContainerRef()?.nativeElement;

    if (!cardsContainerElement) return;

    const cardWidth = cardsContainerElement.firstElementChild?.clientWidth ?? DEFAULT_SCROLL_DISTANCE;
    const scrollDistance = cardWidth + CARDS_GAP_DISTANCE;

    cardsContainerElement.scrollBy({
      left: scrollTo === 'left' ? -scrollDistance : scrollDistance,
      behavior: 'smooth',
    });
  }

  protected setupObserver(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        this.isLastCardVisible.set(entries.some((entry) => entry.isIntersecting));
      },
      { root: this.cardsContainerRef()?.nativeElement, threshold: 0.5 },
    );

    const cardsArray = [...this.cardElements()];
    const lastCard = cardsArray[cardsArray.length - 1]?.nativeElement;
    if (lastCard) {
      observer.observe(lastCard);
    }
  }

  protected onScroll(): void {
    const container = this.cardsContainerRef()?.nativeElement as HTMLDivElement;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    this.isAtStart.set(container.scrollLeft === 0);
    this.isLastCardVisible.set(container.scrollLeft >= maxScrollLeft - 10);
  }

  protected scrollNext(): void {
    if (this.cardsContainerRef()) {
      this.cardsContainerRef()?.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
    }
  }

  protected scrollPrev(): void {
    if (this.cardsContainerRef()) {
      this.cardsContainerRef()?.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
    }
  }
}
