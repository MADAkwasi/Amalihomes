import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavlinksComponent } from '../navlinks/navlinks.component';
import { ButtonComponent } from '@amalihomes/shared';
import { SearchFieldComponent } from '../search-field/search-field.component';
import { Section, StoryblokNavLink } from '../../../types/storyblok';

@Component({
  selector: 'app-menu',
  imports: [CommonModule, NavlinksComponent, ButtonComponent, SearchFieldComponent],
  templateUrl: './menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  public readonly navLinks = input.required<StoryblokNavLink[]>();
  public readonly placeholder = input<Section['inputPlaceholder']>();
  public readonly authBtn = input.required<Section['buttonText']>();
  public isAuthenticated = input.required<boolean>();
}
