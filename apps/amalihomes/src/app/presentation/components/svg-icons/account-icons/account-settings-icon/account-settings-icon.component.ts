import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-account-settings-icon',
  imports: [CommonModule],
  templateUrl: './account-settings-icon.component.html',
})
export class AccountSettingsIconComponent {
  public selected = input(false);
}
