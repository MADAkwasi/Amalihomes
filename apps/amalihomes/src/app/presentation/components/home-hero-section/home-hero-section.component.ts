/* eslint-disable no-empty-function */
import { Component, DestroyRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonDirective } from '../../../logic/directives/skeleton/skeleton.directive';
import { ButtonComponent } from '@amalihomes/shared';
import { LucideAngularModule, ArrowLeft, ArrowRight } from 'lucide-angular';
import { ApplicationImageDataType } from '../../../logic/stores/mocked-data';
import { Store } from '@ngrx/store';
import { ApplicationStore } from '../../../logic/stores';
import { selectApplicationImageData } from '../../../logic/stores/selectors/image-data';
import { map } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-home-hero-section',
  imports: [CommonModule, SkeletonDirective, LucideAngularModule, ButtonComponent],
  templateUrl: './home-hero-section.component.html',
})
export class HomeHeroSectionComponent implements OnInit {
  heroImages!: ApplicationImageDataType;

  // Image positions changes when user clicks next/previous
  imagePostions = [0, 1, 2];

  selectedIndex = 0;

  // Shows loading skeleton while image loads
  heroImageLoading = true;

  icons = { ArrowLeft, ArrowRight };

  constructor(private imagesStore: Store<ApplicationStore>, private destroyRef: DestroyRef) {}

  ngOnInit(): void {
    // Selects and slice first three as hero images
    this.imagesStore
      .select(selectApplicationImageData)
      .pipe(
        map((data) => data.slice(0, 3)),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((heroImages) => {
        this.heroImages = heroImages;
        this.heroImageLoading = false;
      });
  }

  handleNextButtonClick() {
    this.selectedIndex = this.getNextIndexOf(this.imagePostions[0]);

    this.imagePostions = [
      this.selectedIndex,
      this.getNextIndexOf(this.imagePostions[1]),
      this.getNextIndexOf(this.imagePostions[2]),
    ];
  }

  handlePreviousButtonClick() {
    this.selectedIndex = this.getPreviousIndexOf(this.imagePostions[0]);

    this.imagePostions = [
      this.selectedIndex,
      this.getPreviousIndexOf(this.imagePostions[1]),
      this.getPreviousIndexOf(this.imagePostions[2]),
    ];
  }

  getNextIndexOf(index: number) {
    return (index + 1) % 3;
  }

  getPreviousIndexOf(index: number) {
    return (index - 1 + 3) % 3;
  }
}
