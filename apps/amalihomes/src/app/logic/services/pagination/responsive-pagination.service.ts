import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ResponsivePaginationService {
  private readonly productsPerPage = signal(this.calculatePerPage());
  private readonly platformId = inject(PLATFORM_ID);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      fromEvent(window, 'resize')
        .pipe(
          startWith(null),
          map(() => this.calculatePerPage()),
        )
        .subscribe((value) => this.productsPerPage.set(value));
    }
  }

  getPerPage = () => this.productsPerPage;

  private calculatePerPage(): number {
    if (isPlatformBrowser(this.platformId)) {
      if (window.matchMedia('(min-width: 1024px)').matches) return 12;
      if (window.matchMedia('(min-width: 768px)').matches) return 9;
      return 8;
    }

    return 12;
  }
}
