import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { localization, Localization } from '../../data/constants/localization';

@Injectable({
  providedIn: 'root',
})
export class LocalizationService {
  private readonly http = inject(HttpClient);

  public getUserCountry(): Observable<string> {
    return this.http.get<{ country_name: string }>('https://ipapi.co/json/').pipe(map((val) => val['country_name']));
  }

  public translateUnderConstruction(langCode: string): string {
    if (langCode === 'fr') return 'Est En Construction';
    if (langCode === 'de') return 'Is In Aanbouw';
    return 'Is Under Construction';
  }

  public getUserLocale(): Observable<Localization | undefined> {
    const userLocale$ = this.getUserCountry().pipe(
      map((country) => localization.find((loc) => loc.country === country)),
      catchError(() => of(localization[0])),
    );

    return userLocale$;
  }
}
