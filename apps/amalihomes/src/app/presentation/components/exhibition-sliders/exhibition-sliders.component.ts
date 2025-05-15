import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../types/chatbot';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ButtonComponent, TextDirective } from '@amalihomes/shared';
import { ArrowLeft, ArrowRight, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-exhibition-sliders',
  imports: [CommonModule, ProductCardComponent, ButtonComponent, TextDirective, LucideAngularModule],
  templateUrl: './exhibition-sliders.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExhibitionSlidersComponent {
  public readonly products = input.required<Product[]>();
  public readonly title = input<string>();
  public readonly length = input<number>(6);
  public readonly description = input<string>();
  protected readonly isViewExpanded = input<boolean>(false);
  protected readonly icons = { ArrowLeft, ArrowRight };
  protected sliderProducts = computed(() => this.products().slice(0, this.length()));

  protected onArrowNavigation(direction: 'left' | 'right') {
    return;
  }

  protected onViewAll() {
    return;
  }
}
