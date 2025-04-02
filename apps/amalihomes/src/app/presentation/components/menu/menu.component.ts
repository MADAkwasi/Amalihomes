import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavlinksComponent } from '../navlinks/navlinks.component';
import { ButtonComponent } from '@amalihomes/shared';
import { SearchFieldComponent } from '../search-field/search-field.component';

@Component({
  selector: 'app-menu',
  imports: [CommonModule, NavlinksComponent, ButtonComponent, SearchFieldComponent],
  templateUrl: './menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  isAuthenticated = input<boolean>(false);
}
