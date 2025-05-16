import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavaigationPanelComponent } from '../../components/dashboard/navaigation-panel/navaigation-panel.component';
import { DashboardHeaderComponent } from '../../components/dashboard/dashboard-header/dashboard-header.component';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, NavaigationPanelComponent, DashboardHeaderComponent],
  templateUrl: './dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  protected expanded = signal(true);
}
