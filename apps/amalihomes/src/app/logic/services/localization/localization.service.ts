import { HttpClient } from '@angular/common/http';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { localization, Localization } from '../../data/constants/localization';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class LocalizationService {
  private readonly http = inject(HttpClient);
  private readonly platformId = inject(PLATFORM_ID);
  // private readonly

  public getUserCountry(): Observable<string> {
    if (!isPlatformBrowser(this.platformId)) {
      return of('');
    }

    return this.http.get<{ country_code: string }>('https://ipapi.co/json/').pipe(
      map((val) => val['country_code']),
      catchError(() => of('')),
    );
  }

  public translateUnderConstruction(langCode: string): string {
    if (langCode === 'fr') return 'Est En Construction';
    if (langCode === 'de') return 'Is In Aanbouw';
    return 'Is Under Construction';
  }

  public getUserLocale(): Observable<Localization> {
    return this.getUserCountry().pipe(
      map((country) => {
        if (isPlatformBrowser(this.platformId)) {
          const stored = localStorage.getItem('locale');
          if (stored) {
            return JSON.parse(stored) as Localization;
          }
        }

        return localization.find((loc) => loc.countryCode === country) ?? localization[0];
      }),
      tap((locale) => {
        if (!isPlatformBrowser(this.platformId)) return;
        if (!localStorage.getItem('locale')) {
          localStorage.setItem('locale', JSON.stringify(locale));
        }
      }),
      catchError(() => {
        const fallback = localization[0];
        if (isPlatformBrowser(this.platformId)) {
          localStorage.setItem('locale', JSON.stringify(fallback));
        }
        return of(fallback);
      }),
    );
  }
}
