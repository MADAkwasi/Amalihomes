import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavlinksComponent } from '../navlinks/navlinks.component';
import { ButtonComponent } from '@amalihomes/shared';
import { SearchFieldComponent } from '../search-field/search-field.component';
import { HeaderStoryblok } from '../../../types';

@Component({
  selector: 'app-menu',
  imports: [CommonModule, NavlinksComponent, ButtonComponent, SearchFieldComponent],
  templateUrl: './menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  public readonly navLinks = input.required<HeaderStoryblok['navLinks']>();
  public readonly placeholder = input<HeaderStoryblok['inputPlaceholder']>();
  public readonly authBtn = input.required<HeaderStoryblok['loginButton']>();
  public isAuthenticated = input.required<boolean>();
}
