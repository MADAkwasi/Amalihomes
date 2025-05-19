import { ChangeDetectionStrategy, Component, inject, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardNavigationTabs } from '../../../components/dashboard/data';
import { ButtonComponent, TextDirective, InputComponent } from '@amalihomes/shared';
import { AllDashboardMessageTabs, AllMessages, DashboardMessage, DashboardMessageTab } from './data';
import { LucideAngularModule, ChevronDown, Search, MoreVertical } from 'lucide-angular';
import { Router } from '@angular/router';
import { PlatformDetectorService } from 'apps/amalihomes/src/app/logic/services/platform-detector/platform-detector.service';
import { getInitialTab } from '../util';

@Component({
  selector: 'app-dashboard-messages-page',
  imports: [CommonModule, TextDirective, ButtonComponent, LucideAngularModule, InputComponent],
  templateUrl: './dashboard-messages.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardMessagesComponent {
  private platform = inject(PlatformDetectorService);
  protected router = inject(Router);
  public forwardDialogEvent = output();
  protected readonly tabName = DashboardNavigationTabs.Messages;
  protected tabTypes = DashboardMessageTab;
  protected messageTabs = AllDashboardMessageTabs;
  protected allMessages = AllMessages;
  protected selectedTab = signal(this.tabTypes.All);
  protected selectedMessage = signal<DashboardMessage | null>(null);
  protected showMoreOptions = signal(false);
  protected icons = { ChevronDown, Search, MoreVertical };

  constructor() {
    if (this.platform.isPlatformBrowser()) {
      const tab = getInitialTab({ index: 2, mustMatch: ['dashboard', 'messages'] }) as DashboardMessageTab;
      this.selectedTab.set(tab);
    }
  }

  protected parseDate(time: number) {
    return new Date(time).toLocaleString('en-US', {
      month: 'short',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  }
}
