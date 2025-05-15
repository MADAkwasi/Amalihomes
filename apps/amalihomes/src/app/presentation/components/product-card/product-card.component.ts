import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Product } from '../../../types/chatbot';
import { RatingsComponent } from '../ratings/ratings.component';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule, RouterModule, RatingsComponent, CurrencyPipe],
  templateUrl: './product-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
  public readonly product = input.required<Product>();
  public readonly width = input<string>();
  public readonly isOnSlider = input<boolean>(false);

  protected calculateDiscountedPrice(price: number, discountPercentage: Product['discount']): number {
    if (discountPercentage === null) return price;

    if (discountPercentage <= 0) return price;
    if (discountPercentage >= 100) return 0;

    const discountAmount = (price * discountPercentage) / 100;
    return parseFloat((price - discountAmount).toFixed(2));
  }
}
