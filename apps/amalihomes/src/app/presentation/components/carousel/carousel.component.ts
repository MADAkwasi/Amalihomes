import { ChangeDetectionStrategy, Component, effect, input, signal } from '@angular/core';
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
export class CarouselComponent {
  public readonly carouselImages = input<HeroStoryblok['images']>([]);
  public readonly isImageAvailable = input<boolean>(false);
  protected readonly imagePositions = signal<number[]>([]);
  protected selectedIndex = 0;
  protected readonly icons = { ArrowLeft, ArrowRight };

  constructor() {
    effect(() => {
      this.imagePositions.set(Array.from({ length: this.carouselImages().length - 1 }, (_, i) => i + 1));
    });
  }

  public updateImagePositions(arr: number[], direction: 'prev' | 'next'): number[] {
    return arr.map((pos) => (direction === 'prev' ? this.getPreviousIndexOf(pos) : this.getNextIndexOf(pos)));
  }

  public handleCarouselMovement(direction: 'prev' | 'next'): void {
    this.selectedIndex =
      direction === 'prev' ? this.getPreviousIndexOf(this.selectedIndex) : this.getNextIndexOf(this.selectedIndex);

    this.imagePositions.update((value) => this.updateImagePositions(value, direction));
  }

  public getNextIndexOf(index: number) {
    return (index + 1) % 3;
  }

  public getPreviousIndexOf(index: number) {
    return (index - 1 + 3) % 3;
  }
}
