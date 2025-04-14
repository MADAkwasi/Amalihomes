import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  input,
  OnDestroy,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ButtonComponent, ImageComponent } from '@amalihomes/shared';
import { ArrowLeft, ArrowRight, LucideAngularModule } from 'lucide-angular';
import { SkeletonDirective } from '../../../logic/directives/skeleton/skeleton.directive';
import { StoryblokImages } from '../../../types/storyblok';

@Component({
  selector: 'app-carousel',
  imports: [CommonModule, ButtonComponent, ImageComponent, LucideAngularModule, SkeletonDirective],
  templateUrl: './carousel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselComponent implements OnDestroy {
  public readonly carouselImages = input<StoryblokImages[]>([]);
  public readonly isImageAvailable = input<boolean>(false);
  protected readonly imagePositions = signal<number[]>([]);
  protected selectedIndex = signal(0);
  protected readonly icons = { ArrowLeft, ArrowRight };
  private readonly platformId = inject(PLATFORM_ID);

  constructor() {
    effect(() => {
      this.imagePositions.set(Array.from({ length: this.carouselImages().length - 1 }, (_, i) => i + 1));
    });

    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener('keydown', this.onKeyDown.bind(this));
    }

    setInterval(() => this.handleCarouselMovement('next'), 5000);
  }

  private onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'ArrowRight') this.handleCarouselMovement('next');
    else if (event.key === 'ArrowLeft') this.handleCarouselMovement('prev');
  }

  protected handleCarouselMovement(direction: 'prev' | 'next'): void {
    const total = this.carouselImages().length;
    const nextIndex =
      direction === 'next' ? (this.selectedIndex() + 1) % total : (this.selectedIndex() - 1 + total) % total;

    this.selectedIndex.set(nextIndex);

    const allIndexes = Array.from({ length: total }, (_, i) => i);

    const newImagePositions = allIndexes.filter((i) => i !== this.selectedIndex());

    this.imagePositions.set(newImagePositions);
  }

  protected navigateToImage(positionIndex: number): void {
    const clickedIndex = this.imagePositions()[positionIndex];

    if (clickedIndex === this.selectedIndex()) return;

    const newPositions = [this.selectedIndex(), ...this.imagePositions().filter((i) => i !== clickedIndex)];
    this.selectedIndex.set(clickedIndex);

    this.imagePositions.set(newPositions);
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('keydown', this.onKeyDown);
    }
  }
}
