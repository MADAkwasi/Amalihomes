import { Component, OnInit, input, ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ResponsiveHeadingComponent } from '../responsive-heading/responsive-heading.component';

@Component({
  selector: 'app-location-map',
  templateUrl: './location-map.component.html',
  imports: [ResponsiveHeadingComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationMapComponent implements OnInit {
  public location = input.required<string>();
  public mapUrl: SafeResourceUrl | undefined;

  // eslint-disable-next-line no-empty-function
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    const url = `https://www.google.com/maps/embed/v1/place?key=AIzaSyCbJlpT4r7r2EH_eCBG7_sF6IwdFs7PwMI&q=${encodeURIComponent(
      this.location(),
    )}`;
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
