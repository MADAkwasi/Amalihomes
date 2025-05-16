import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavaigationPanelComponent } from '../../components/dashboard/navaigation-panel/navaigation-panel.component';
import { DashboardHeaderComponent } from '../../components/dashboard/dashboard-header/dashboard-header.component';
import { DashboardNavigationTabs } from '../../components/dashboard/data';
import { DashboardMessagesComponent } from './dashboard-messages/dashboard-messages.component';
import { DashboardPromotionsComponent } from './dashboard-promotions/dashboard-promotions.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    NavaigationPanelComponent,
    DashboardHeaderComponent,
    DashboardMessagesComponent,
    DashboardPromotionsComponent,
  ],
  templateUrl: './dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  private activatedRoute = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);
  protected tabsType = DashboardNavigationTabs;
  protected selectedTab = signal(this.tabsType.Messages);
  protected expanded = signal(true);

  constructor() {
    const subscription = this.activatedRoute.url.subscribe((urlSegments) => {
      // The activated route is in the form /dashboard/:tab hence, `urlSegments[1]` exists.
      let tab = urlSegments[1].path as DashboardNavigationTabs;
      tab = `${tab.charAt(0).toUpperCase()}${tab.slice(1).toLowerCase()}` as DashboardNavigationTabs;
      this.selectedTab.set(tab);
    });
    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }
}
