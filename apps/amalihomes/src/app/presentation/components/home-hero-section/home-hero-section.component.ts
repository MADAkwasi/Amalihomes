import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonDirective } from '../../../logic/directives/skeleton/skeleton.directive';
import { ButtonComponent, TextDirective, ImageComponent } from '@amalihomes/shared';
import { LucideAngularModule, ArrowLeft, ArrowRight } from 'lucide-angular';
import { Store } from '@ngrx/store';
import { ApplicationStore } from '../../../logic/stores';
import { selectApplicationImageDataByNumber } from '../../../logic/stores/selectors/image-data';

@Component({
  selector: 'app-home-hero-section',
  imports: [CommonModule, SkeletonDirective, LucideAngularModule, ButtonComponent, TextDirective, ImageComponent],
  templateUrl: './home-hero-section.component.html',
})
export class HomeHeroSectionComponent {
  public imagePostions = [0, 1, 2];

  public selectedIndex = 0;

  protected readonly icons = { ArrowLeft, ArrowRight };

  private readonly imagesStore = inject(Store<ApplicationStore>);

  protected heroImages = this.imagesStore.selectSignal(selectApplicationImageDataByNumber({ startIndex: 0, total: 3 }));

  public handleNextButtonClick() {
    this.selectedIndex = this.getNextIndexOf(this.imagePostions[0]);

    this.imagePostions = [
      this.selectedIndex,
      this.getNextIndexOf(this.imagePostions[1]),
      this.getNextIndexOf(this.imagePostions[2]),
    ];
  }

  public handlePreviousButtonClick() {
    this.selectedIndex = this.getPreviousIndexOf(this.imagePostions[0]);

    this.imagePostions = [
      this.selectedIndex,
      this.getPreviousIndexOf(this.imagePostions[1]),
      this.getPreviousIndexOf(this.imagePostions[2]),
    ];
  }

  public getNextIndexOf(index: number) {
    return (index + 1) % 3;
  }

  public getPreviousIndexOf(index: number) {
    return (index - 1 + 3) % 3;
  }
}
