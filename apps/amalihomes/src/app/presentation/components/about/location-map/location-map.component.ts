import { Component, OnInit, input, ChangeDetectionStrategy, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ResponsiveHeadingComponent } from '../responsive-heading/responsive-heading.component';
import { Store } from '@ngrx/store';
import { PLATFORM_ID } from '@angular/core';
import { selectSection } from 'apps/amalihomes/src/app/logic/stores/selectors/storyblok.selectors';
@Component({
  selector: 'app-location-map',
  templateUrl: './location-map.component.html',
  imports: [ResponsiveHeadingComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationMapComponent implements OnInit {
  public location = input.required<string>();
  public mapUrl: SafeResourceUrl | undefined;

  private readonly store = inject(Store);
  private readonly platformId = inject(PLATFORM_ID);
  protected readonly data = this.store.selectSignal(selectSection('global_presence'));

  // eslint-disable-next-line no-empty-function
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    const url = `https://www.google.com/maps/embed/v1/place?key=AIzaSyCbJlpT4r7r2EH_eCBG7_sF6IwdFs7PwMI&q=${encodeURIComponent(
      this.location(),
    )}`;
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
