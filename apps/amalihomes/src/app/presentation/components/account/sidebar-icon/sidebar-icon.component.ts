import { Component, input } from '@angular/core';
import {
  OverviewIconComponent,
  UserComponent,
  AddressIconComponent,
  OrderHistoryIconComponent,
  MessageIconComponent,
  AccountSettingsIconComponent,
} from '../../svg-icons/index';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar-icon',
  standalone: true,
  imports: [
    CommonModule,
    OverviewIconComponent,
    UserComponent,
    AddressIconComponent,
    OrderHistoryIconComponent,
    MessageIconComponent,
    AccountSettingsIconComponent,
  ],
  templateUrl: './sidebar-icon.component.html',
})
export class SidebarIconComponent {
  public selected = input(false);
  public type = input<string>();

  get selectedValue(): boolean {
    return this.selected();
  }
}
