import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ResponsiveHeadingComponent } from '../responsive-heading/responsive-heading.component';
import { Store } from '@ngrx/store';
import { PLATFORM_ID } from '@angular/core';
import { selectSection } from 'apps/amalihomes/src/app/logic/stores/selectors/storyblok.selectors';
import { isPlatformBrowser } from '@angular/common';
import { Office } from 'apps/amalihomes/src/app/logic/interfaces/about';
import { officeLoctions } from 'apps/amalihomes/src/app/logic/data/constants/officeLocations';
import { environment } from 'apps/amalihomes/src/app/environments/env';

@Component({
  selector: 'app-location-map',
  templateUrl: './location-map.component.html',
  imports: [ResponsiveHeadingComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationMapComponent implements OnInit {
  public mapUrl: SafeResourceUrl;

  private readonly store = inject(Store);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly cdr = inject(ChangeDetectorRef);
  protected readonly data = this.store.selectSignal(selectSection('global_presence'));

  private readonly googleMapsApiKey = environment.GOOGLE_MAPS_API_KEY;
  private readonly defaultOffice = officeLoctions[officeLoctions.length - 1];

  constructor(private sanitizer: DomSanitizer) {
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.google.com/maps/embed/v1/place?key=${this.googleMapsApiKey}&q=${encodeURIComponent(
        this.defaultOffice.address,
      )}`,
    );
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.getUserLocation()
        .then((position) => this.setMapUrl(this.findNearestOffice(position)))
        .catch(() => this.setMapUrl(this.defaultOffice));
    }
  }

  private getUserLocation(): Promise<GeolocationPosition> {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => resolve(position),
          (error) => {
            console.error('Geolocation error:', error.message);
            reject(error);
          },
          { timeout: 10000, enableHighAccuracy: true },
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
        reject(new Error('Geolocation not supported'));
      }
    });
  }

  private findNearestOffice(position: GeolocationPosition): Office {
    const userLat = position.coords.latitude;
    const userLng = position.coords.longitude;

    return officeLoctions.reduce(
      (nearest, office) => {
        const distance = this.calculateDistance(userLat, userLng, office.latitude, office.longitude);
        return distance < nearest.distance ? { office, distance } : nearest;
      },
      { office: this.defaultOffice, distance: Infinity } as { office: Office; distance: number },
    ).office;
  }

  private calculateDistance(
    userLatitude: number,
    userLongitude: number,
    officeLatitude: number,
    officeLongitude: number,
  ): number {
    const earthRadiusInKm = 6371;

    const deltaLatitude = this.toRadians(officeLatitude - userLatitude);
    const deltaLongitude = this.toRadians(officeLongitude - userLongitude);

    const a =
      Math.sin(deltaLatitude / 2) * Math.sin(deltaLatitude / 2) +
      Math.cos(this.toRadians(userLatitude)) *
        Math.cos(this.toRadians(officeLatitude)) *
        Math.sin(deltaLongitude / 2) *
        Math.sin(deltaLongitude / 2);

    const centralAngle = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return earthRadiusInKm * centralAngle;
  }

  private toRadians(degrees: number): number {
    return (degrees * Math.PI) / 180;
  }

  private toRad(value: number): number {
    return (value * Math.PI) / 180;
  }

  private setMapUrl(office: Office) {
    const url = `https://www.google.com/maps/embed/v1/place?key=${this.googleMapsApiKey}&q=${encodeURIComponent(
      office.address,
    )}`;
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    this.cdr.markForCheck();
  }
}
