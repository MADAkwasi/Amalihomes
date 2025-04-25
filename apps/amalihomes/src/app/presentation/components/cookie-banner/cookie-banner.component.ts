import { ChangeDetectionStrategy, Component, ElementRef, inject, OnInit, viewChild } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { LucideAngularModule, X, Check } from 'lucide-angular';
import { ButtonComponent, TextDirective } from '@amalihomes/shared';
import { CookieConsentService } from '../../../logic/services/cookie-consent/cookie-consent.service';

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
  protected showBanner = !this.cookieService.hasConsent();
  protected settingsExpanded = false;
  protected availableSettings = [
    { label: 'Test Strict' },
    { label: 'Performance' },
    { label: 'Targeting' },
    { label: 'Functionality' },
    { label: 'Unclassified' },
  ].map((setting, index) => ({ ...setting, enabled: [1, 2, 3].includes(index) }));

  ngOnInit(): void {
    if (this.showBanner) {
      this.document.body.style.overflow = 'hidden';
    }
  }

  private updateSettings() {
    const trackPerformance = this.availableSettings[1].enabled;
    const trackTargeting = this.availableSettings[2].enabled;
    this.cookieService.updateConsent({
      necessary: true,
      analytics_storage: trackPerformance,
      ad_storage: trackTargeting,
      ad_user_data: trackTargeting,
      ad_personalization: trackTargeting,
    });
  }

  protected handleBannerClose() {
    this.showBanner = false;
    this.settingsExpanded = false;
    this.updateSettings();
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
      this.handleBannerClose();
    }
  }

  protected handleRejectAll() {
    this.availableSettings = this.availableSettings.map((setting) => ({ ...setting, enabled: false }));
    this.handleBannerClose();
  }

  protected handleSettingChange(index: number) {
    this.availableSettings[index].enabled = !this.availableSettings[index].enabled;
  }
}
