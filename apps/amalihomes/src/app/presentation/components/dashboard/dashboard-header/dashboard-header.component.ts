import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../../../../shared-ui/components/text-input/text-input.component';
import { LucideAngularModule, Search, Bell, User } from 'lucide-angular';
import { ButtonComponent } from '../../../../shared-ui/components/button/button.component';
import { TextDirective } from '@amalihomes/shared';

@Component({
  selector: 'app-dashboard-header',
  imports: [CommonModule, InputComponent, LucideAngularModule, ButtonComponent, TextDirective],
  templateUrl: './dashboard-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardHeaderComponent {
  protected readonly icons = { Search, Notification: Bell, User };
}
