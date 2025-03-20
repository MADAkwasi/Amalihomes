import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@amalihomes/shared';
import { InternationalizationBarComponent } from '../internationalization-bar/internationalization-bar.component';
import { SearchFieldComponent } from '../search-field/search-field.component';

@Component({
  selector: 'app-header',
  imports: [CommonModule, ButtonComponent, InternationalizationBarComponent, SearchFieldComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  isSearching!: boolean;
  isAuthenticated!: boolean;
}
