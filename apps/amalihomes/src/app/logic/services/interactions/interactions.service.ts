import { DOCUMENT } from '@angular/common';
import { inject, Injectable, signal } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class InteractionsService {
  private readonly router = inject(Router);
  private readonly document = inject(DOCUMENT);
  private _pendingText: string | null = null;
  private _pendingRoute: string | null = null;
  private readonly _lastInteractedText = signal<string | null>(null);

  constructor() {
    this.captureUserInteractions();
    this.listenToRouteChange();
  }

  private captureUserInteractions(): void {
    const updateTextContent = (event: Event) => {
      const target = event.target as HTMLElement | null;
      const routerLink = target?.getAttribute('href');

      if (target?.textContent?.trim() && routerLink) {
        this._pendingText = target.textContent.trim();
        this._pendingRoute = routerLink;
      }
    };

    this.document.addEventListener('focus', updateTextContent, true);
  }

  public listenToRouteChange(): void {
    this.router.events
      .pipe(filter((event): event is NavigationStart => event instanceof NavigationStart))
      .subscribe((event) => {
        const isWildcard = event.url === '/404' || event.url.includes('**');
        if (!isWildcard && this._pendingText) {
          this._lastInteractedText.set(this._pendingText);
        }

        this._pendingText = null;
        this._pendingRoute = null;
      });
  }

  get lastInteractedText() {
    return this._lastInteractedText;
  }
}
