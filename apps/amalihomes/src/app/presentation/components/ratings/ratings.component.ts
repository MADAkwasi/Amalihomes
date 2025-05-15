import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Review } from '../../../types/chatbot';

@Component({
  selector: 'app-ratings',
  imports: [CommonModule],
  templateUrl: './ratings.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RatingsComponent {
  public readonly reviews = input.required<Review[]>();
  public readonly ratings = input.required<number>();
  public readonly starSize = input(20);
  public readonly spaced = input(true);
  protected readonly ratingsStars = computed(() => {
    return Array.from({ length: 5 }, (_, i) => this.ratings() >= i + 1);
  });
}
