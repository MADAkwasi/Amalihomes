import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavaigationPanelComponent } from '../../components/dashboard/navaigation-panel/navaigation-panel.component';
import { DashboardHeaderComponent } from '../../components/dashboard/dashboard-header/dashboard-header.component';
import { DashboardNavigationTabs } from '../../components/dashboard/data';
import { DashboardMessagesComponent } from './dashboard-messages/dashboard-messages.component';
import { DashboardPromotionsComponent } from './dashboard-promotions/dashboard-promotions.component';
import { PlatformDetectorService } from '../../../logic/services/platform-detector/platform-detector.service';
import { getInitialTab } from './util';
import { ButtonComponent, SelectInputComponent, TextDirective } from '@amalihomes/shared';
import { DashboardMessagePriorityOptions, mockedSalesePersonnels } from './data';

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    NavaigationPanelComponent,
    DashboardHeaderComponent,
    DashboardMessagesComponent,
    DashboardPromotionsComponent,
    SelectInputComponent,
    TextDirective,
    ButtonComponent,
  ],
  templateUrl: './dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  private platform = inject(PlatformDetectorService);
  protected tabsType = DashboardNavigationTabs;
  protected selectedTab = signal(this.tabsType.Messages);
  protected expanded = signal(true);
  protected showForwardDialog = signal(false);
  protected readonly priorityOptions = DashboardMessagePriorityOptions;
  protected readonly salesPesonnelOptions = mockedSalesePersonnels;

  constructor() {
    if (this.platform.isPlatformBrowser()) {
      this.selectedTab.set(getInitialTab({ index: 1, mustMatch: ['dashboard'] }) as DashboardNavigationTabs);
    }
  }
}
