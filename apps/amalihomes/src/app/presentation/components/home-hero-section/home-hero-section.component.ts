import { Component, computed, inject, ChangeDetectionStrategy, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent, TextDirective } from '@amalihomes/shared';
import { LucideAngularModule } from 'lucide-angular';
import { Store } from '@ngrx/store';
import { ApplicationStore } from '../../../logic/stores';
import { CarouselComponent } from '../carousel/carousel.component';
import { selectHomePageSectionData } from '../../../logic/stores/selectors/home-page';
import { HeroStoryblok } from '../../../types';

@Component({
  selector: 'app-home-hero-section',
  imports: [CommonModule, LucideAngularModule, ButtonComponent, TextDirective, CarouselComponent],
  templateUrl: './home-hero-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeHeroSectionComponent {
  private readonly store = inject(Store<ApplicationStore>);
  protected readonly data = this.store.selectSignal(selectHomePageSectionData('hero')) as Signal<HeroStoryblok>;
  public heroImages = computed(() => this.data()?.images ?? []);
}
