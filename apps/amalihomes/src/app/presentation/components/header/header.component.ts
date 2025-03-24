import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@amalihomes/shared';
import { InternationalizationBarComponent } from '../internationalization-bar/internationalization-bar.component';
import { SearchFieldComponent } from '../search-field/search-field.component';
import { LucideAngularModule, Search, ShoppingCart, Menu } from 'lucide-angular';

@Component({
  selector: 'app-header',
  imports: [CommonModule, ButtonComponent, InternationalizationBarComponent, SearchFieldComponent, LucideAngularModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  public isSearching!: boolean;
  public isAuthenticated!: boolean;
  public icons = { Search, ShoppingCart, Menu };
}
