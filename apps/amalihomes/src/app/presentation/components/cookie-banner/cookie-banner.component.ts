import { ChangeDetectionStrategy, Component, ElementRef, inject, OnInit, viewChild } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { LucideAngularModule, X, Check } from 'lucide-angular';
import { ButtonComponent, TextDirective } from '@amalihomes/shared';

@Component({
  selector: 'app-cookie-banner',
  imports: [CommonModule, LucideAngularModule, TextDirective, ButtonComponent],
  templateUrl: './cookie-banner.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CookieBannerComponent implements OnInit {
  private readonly firstCookieSetting = viewChild<ElementRef>('firstCookieSetting');
  private readonly document = inject(DOCUMENT);
  protected readonly icons = { X, Check };
  protected showBanner = true;
  protected settingsExpanded = false;
  protected availableSettings = [
    { label: 'Test Strict' },
    { label: 'Performance' },
    { label: 'Targeting' },
    { label: 'Functionality' },
    { label: 'Unclassified' },
  ].map((setting) => ({ ...setting, enabled: false }));

  ngOnInit(): void {
    this.document.body.style.overflow = 'hidden';
  }

  protected handleBannerClose() {
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
      // TODO: Set cookie settings
      this.handleBannerClose();
    }
  }

  protected handleSettingChange(index: number) {
    this.availableSettings[index].enabled = !this.availableSettings[index].enabled;
  }
}
