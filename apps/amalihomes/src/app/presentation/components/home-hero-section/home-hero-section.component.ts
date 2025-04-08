import { Component, computed, inject, ChangeDetectionStrategy, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { Store } from '@ngrx/store';
import { ApplicationStore } from '../../../logic/stores';
import { CarouselComponent } from '../carousel/carousel.component';
import { selectHomePageSectionData } from '../../../logic/stores/selectors/home-page';
import { HeroStoryblok } from '../../../types';
import { RouterLink } from '@angular/router';
import { TextDirective } from '@amalihomes/shared';

@Component({
  selector: 'app-home-hero-section',
  imports: [CommonModule, LucideAngularModule, TextDirective, CarouselComponent, RouterLink],
  templateUrl: './home-hero-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeHeroSectionComponent {
  private readonly store = inject(Store<ApplicationStore>);
  protected readonly data = this.store.selectSignal(selectHomePageSectionData('hero')) as Signal<HeroStoryblok>;
  public heroImages = computed(() => this.data()?.images ?? []);
}
