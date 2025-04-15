import { DOCUMENT } from '@angular/common';
import { inject, Injectable, OnDestroy, signal } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class InteractionsService implements OnDestroy {
  private readonly router = inject(Router);
  private readonly document = inject(DOCUMENT);
  private _pendingText: string | null = null;
  private _pendingRoute: string | null = null;
  private readonly _lastInteractedText = signal<string | null>(null);
  private readonly updateTextContent = this._updateTextContent.bind(this);

  constructor() {
    this.captureUserInteractions();
    this.listenToRouteChange();
  }

  private captureUserInteractions(): void {
    this.document.addEventListener('focus', this.updateTextContent, true);
  }

  private _updateTextContent(event: Event): void {
    const target = event.target as HTMLElement | null;
    const routerLink = target?.getAttribute('href');

    if (target?.textContent?.trim() && routerLink) {
      this._pendingText = target.textContent.trim();
      this._pendingRoute = routerLink;
    }
  }

  ngOnDestroy(): void {
    this.document.removeEventListener('focus', this.updateTextContent, true);
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
