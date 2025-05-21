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
import { DashboardMessagePriorityOptions, forwardingFieldValidation, mockedSalesePersonnels } from './data';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

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
    ReactiveFormsModule,
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
  protected forwardingForm = new FormGroup({
    department: new FormControl('', { validators: forwardingFieldValidation }),
    priority: new FormControl('', { validators: forwardingFieldValidation }),
  });

  protected getControl(fieldName: string) {
    return this.forwardingForm.get(fieldName) as FormControl;
  }

  protected onForwardMessage() {
    const department = this.forwardingForm.controls.department;
    const priority = this.forwardingForm.controls.priority;
    if (this.forwardingForm.valid) {
      // TODO: Forward message
    }
  }

  constructor() {
    if (this.platform.isPlatformBrowser()) {
      this.selectedTab.set(getInitialTab({ index: 1, mustMatch: ['dashboard'] }) as DashboardNavigationTabs);
    }
  }
}
