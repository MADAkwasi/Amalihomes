import { Component, ElementRef, inject, input, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ArrowRight, ArrowLeft } from 'lucide-angular';
import { ApplicationStore } from '../../../logic/stores';
import { Store } from '@ngrx/store';
import { selectApplicationImageDataByNumber } from '../../../logic/stores/selectors/image-data';
import { RouterModule } from '@angular/router';
import { ButtonComponent, ImageComponent, TextDirective } from '@amalihomes/shared';

const DEFAULT_SCROLL_DISTANCE = 200;
const CARDS_GAP_DISTANCE = 16;

@Component({
  selector: 'app-home-category-section',
  imports: [CommonModule, LucideAngularModule, RouterModule, ButtonComponent, ImageComponent, TextDirective],
  templateUrl: './home-category-section.component.html',
  styleUrl: './home-category-section.component.css',
})
export class HomeCategorySectionComponent {
  private readonly imagesStore = inject(Store<ApplicationStore>);

  public readonly categoryTitle = input.required<string>();

  public readonly categoryType = input<'products' | 'arrivals'>('products');

  protected readonly productsShowcase = this.imagesStore.selectSignal(
    selectApplicationImageDataByNumber({ startIndex: 0, total: 6 }),
  );

  private readonly cardsContainerRef = viewChild<ElementRef<HTMLDivElement>>('cardsContainer');

  protected readonly icons = { ArrowLeft, ArrowRight };

  public getProductItemLink(productId: string, productName: string) {
    return `/${this.categoryType()}/${productId}/${productName}`;
  }

  protected autoScroll(scrollTo: 'left' | 'right') {
    const cardsContainerElement = this.cardsContainerRef()?.nativeElement;

    if (!cardsContainerElement) return;

    const cardWidth = cardsContainerElement.firstElementChild?.clientWidth || DEFAULT_SCROLL_DISTANCE;
    const scrollDistance = cardWidth + CARDS_GAP_DISTANCE;

    cardsContainerElement.scrollBy({
      left: scrollTo === 'left' ? -scrollDistance : scrollDistance,
      behavior: 'smooth',
    });
  }
}
