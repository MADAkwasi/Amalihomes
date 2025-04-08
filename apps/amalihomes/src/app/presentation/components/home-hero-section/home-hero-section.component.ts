import { Component, computed, inject, ChangeDetectionStrategy, signal, effect, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonDirective } from '../../../logic/directives/skeleton/skeleton.directive';
import { ButtonComponent, TextDirective } from '@amalihomes/shared';
import { LucideAngularModule, ArrowLeft, ArrowRight } from 'lucide-angular';
import { Store } from '@ngrx/store';
import { ApplicationStore } from '../../../logic/stores';
import { selectHomePageSectionData } from '../../../logic/stores/selectors/home-page';
import { HeroStoryblok } from '../../../types';

@Component({
  selector: 'app-home-hero-section',
  imports: [CommonModule, SkeletonDirective, LucideAngularModule, ButtonComponent, TextDirective],
  templateUrl: './home-hero-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeHeroSectionComponent {
  public selectedIndex = 0;
  protected readonly icons = { ArrowLeft, ArrowRight };
  private readonly store = inject(Store<ApplicationStore>);
  protected readonly data = this.store.selectSignal(selectHomePageSectionData('hero')) as Signal<HeroStoryblok>;
  public heroImages = computed(() => this.data()?.images ?? []);
  public readonly imagePositions = signal<number[]>([]);

  constructor() {
    effect(() => {
      const images = this.data()?.images || [];
      this.imagePositions.set(Array.from({ length: images.length - 1 }, (_, i) => i + 1));
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
    return (index + 1) % this.heroImages().length;
  }

  public getPreviousIndexOf(index: number) {
    const numberOfImages = this.heroImages().length;
    return (index - 1 + numberOfImages) % numberOfImages;
  }
}
