import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardNavigationTabs } from '../../../components/dashboard/data';

@Component({
  selector: 'app-dashboard-messages-page',
  imports: [CommonModule],
  templateUrl: './dashboard-messages.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardMessagesComponent {
  protected readonly tabName = DashboardNavigationTabs.Messages;
}
