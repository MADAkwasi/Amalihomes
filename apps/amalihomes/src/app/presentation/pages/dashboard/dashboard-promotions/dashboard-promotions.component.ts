import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardNavigationTabs } from '../../../components/dashboard/data';

@Component({
  selector: 'app-dashboard-promotions-page',
  imports: [CommonModule],
  templateUrl: './dashboard-promotions.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPromotionsComponent {
  protected readonly tabName = DashboardNavigationTabs.Promotions;
}
