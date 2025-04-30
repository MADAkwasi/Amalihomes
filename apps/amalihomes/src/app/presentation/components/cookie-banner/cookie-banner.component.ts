import { ChangeDetectionStrategy, Component, ElementRef, inject, OnInit, viewChild } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { LucideAngularModule, X, Check } from 'lucide-angular';
import { ButtonComponent, TextDirective } from '@amalihomes/shared';
import { CookieConsentService } from '../../../logic/services/cookie-consent/cookie-consent.service';
import {
  CookieConsent,
  CookieConsentLabelKeys,
  CookieConsentLabels,
  CookieAcceptanceActions,
} from '../../../types/cookies';

@Component({
  selector: 'app-cookie-banner',
  imports: [CommonModule, LucideAngularModule, TextDirective, ButtonComponent],
  templateUrl: './cookie-banner.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CookieBannerComponent implements OnInit {
  private readonly firstCookieSetting = viewChild<ElementRef>('firstCookieSetting');
  private readonly document = inject(DOCUMENT);
  private readonly cookieService = inject(CookieConsentService);
  protected readonly icons = { X, Check };
  protected settingsExpanded = false;
  protected showBanner = !this.cookieService.hasConsent();
  private cookieLabels = CookieConsentLabels;
  private cookieSettings = this.cookieService.getCookieSettings();
  protected availableSettings;
  protected readonly acceptanceActions = CookieAcceptanceActions;

  constructor() {
    this.availableSettings = this.getTransformedCookieSettings();
  }

  ngOnInit(): void {
    if (this.showBanner) {
      this.document.body.style.overflow = 'hidden';
    }
  }

  private handleBannerClose() {
    this.showBanner = false;
    this.settingsExpanded = false;
    this.document.body.style.overflow = 'auto';
  }

  protected handleSettingsToggle() {
    if (!this.settingsExpanded) {
      this.settingsExpanded = true;
      // Ensures logical navigation flow
      setTimeout(() => {
        this.firstCookieSetting()?.nativeElement.focus();
      }, 0);
    } else {
      this.handleCookieAcceptance(this.acceptanceActions.saveSettings);
    }
  }

  protected handleCookieAcceptance(action: CookieAcceptanceActions) {
    if (action === this.acceptanceActions.rejectAll) {
      this.cookieService.updateConsent(null);
    } else if (action === this.acceptanceActions.saveSettings) {
      this.cookieService.updateConsent(this.cookieSettings);
    }
    this.handleBannerClose();
  }

  protected handleSettingChange(key: keyof CookieConsent) {
    this.cookieSettings[key] = !this.cookieSettings[key];
    this.availableSettings = this.getTransformedCookieSettings();
  }

  private getTransformedCookieSettings() {
    return CookieConsentLabelKeys.map((key) => {
      const label = this.cookieLabels[key];
      const enabled = this.cookieSettings[key];
      return { label, enabled, key };
    });
  }
}
