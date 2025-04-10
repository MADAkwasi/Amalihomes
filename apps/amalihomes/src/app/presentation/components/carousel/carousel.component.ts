import { ChangeDetectionStrategy, Component, effect, input, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent, ImageComponent } from '@amalihomes/shared';
import { ArrowLeft, ArrowRight, LucideAngularModule } from 'lucide-angular';
import { SkeletonDirective } from '../../../logic/directives/skeleton/skeleton.directive';
import { HeroStoryblok } from '../../../types';

@Component({
  selector: 'app-carousel',
  imports: [CommonModule, ButtonComponent, ImageComponent, LucideAngularModule, SkeletonDirective],
  templateUrl: './carousel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselComponent implements OnDestroy {
  public readonly carouselImages = input<HeroStoryblok['images']>([]);
  public readonly isImageAvailable = input<boolean>(false);
  public readonly imagePositions = signal<number[]>([]);
  public selectedIndex = signal(0);
  protected readonly icons = { ArrowLeft, ArrowRight };

  constructor() {
    effect(() => {
      this.imagePositions.set(Array.from({ length: this.carouselImages().length - 1 }, (_, i) => i + 1));
    });

    window.addEventListener('keydown', this.onKeyDown.bind(this));
  }

  private onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'ArrowRight') this.handleCarouselMovement('next');
    else if (event.key === 'ArrowLeft') this.handleCarouselMovement('prev');
  }

  public handleCarouselMovement(direction: 'prev' | 'next'): void {
    const total = this.carouselImages().length;
    const nextIndex =
      direction === 'next' ? (this.selectedIndex() + 1) % total : (this.selectedIndex() - 1 + total) % total;

    this.selectedIndex.set(nextIndex);

    const allIndexes = Array.from({ length: total }, (_, i) => i);

    const newImagePositions = allIndexes.filter((i) => i !== this.selectedIndex());

    this.imagePositions.set(newImagePositions);
  }

  public navigateToImage(positionIndex: number): void {
    const clickedIndex = this.imagePositions()[positionIndex];

    if (clickedIndex === this.selectedIndex()) return;

    const newPositions = [this.selectedIndex(), ...this.imagePositions().filter((i) => i !== clickedIndex)];
    this.selectedIndex.set(clickedIndex);

    this.imagePositions.set(newPositions);
  }

  ngOnDestroy(): void {
    window.removeEventListener('keydown', this.onKeyDown);
  }
}
