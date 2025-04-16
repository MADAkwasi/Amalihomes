import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  input,
  PLATFORM_ID,
  QueryList,
  signal,
  viewChild,
  ViewChildren,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ButtonComponent, ImageComponent, TextDirective } from '@amalihomes/shared';
import { ArrowLeft, ArrowRight, LucideAngularModule } from 'lucide-angular';
import { StoryblokImages } from '../../../types/storyblok';
import { RouterModule } from '@angular/router';

const DEFAULT_SCROLL_DISTANCE = 200;
const CARDS_GAP_DISTANCE = 16;

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule, ButtonComponent, LucideAngularModule, ImageComponent, TextDirective, RouterModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
})
export class SliderComponent implements AfterViewInit {
  @ViewChildren('cardElements') private readonly cardElements!: QueryList<ElementRef>;
  public readonly sliderImages = input<StoryblokImages[]>();
  public readonly categoryType = input<'products' | 'arrivals'>();
  public readonly title = input<string>();
  private readonly cardsContainerRef = viewChild<ElementRef<HTMLDivElement>>('cardsContainer');
  protected readonly icons = { ArrowLeft, ArrowRight };
  protected isLastCardVisible = signal(false);
  protected isAtStart = signal(true);
  private readonly platformId = inject(PLATFORM_ID);

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.setupObserver();
    }
  }

  protected getProductItemLink(productId: string, productName: string): string {
    return `/${this.categoryType()}/${productId}/${productName}`;
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

    const cardsArray = this.cardElements.toArray();
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
