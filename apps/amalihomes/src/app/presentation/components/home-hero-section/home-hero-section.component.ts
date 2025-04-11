import { Component, inject, ChangeDetectionStrategy, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { Store } from '@ngrx/store';
import { ApplicationStore } from '../../../logic/stores';
import { CarouselComponent } from '../carousel/carousel.component';
import { RouterLink } from '@angular/router';
import { TextDirective } from '@amalihomes/shared';
import { selectSection } from '../../../logic/stores/selectors/storyblok.selectors';
import { Button } from '../../../types/storyblok';

@Component({
  selector: 'app-home-hero-section',
  imports: [CommonModule, LucideAngularModule, TextDirective, CarouselComponent, RouterLink],
  templateUrl: './home-hero-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeHeroSectionComponent {
  private readonly store = inject(Store<ApplicationStore>);
  protected readonly heroContent = this.store.selectSignal(selectSection('hero'));
  protected heroImages = computed(() => this.heroContent()?.images ?? []);

  protected getButtonData(btnId: string): Button {
    return this.heroContent()?.buttons.find((btn) => btn.identifier === btnId) as Button;
  }
}
