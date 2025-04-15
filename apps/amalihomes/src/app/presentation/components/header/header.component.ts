import { Component, inject, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@amalihomes/shared';
import { SearchFieldComponent } from '../search-field/search-field.component';
import { RouterModule } from '@angular/router';
import { NavlinksComponent } from '../navlinks/navlinks.component';
import { MenuComponent } from '../menu/menu.component';
import { Store } from '@ngrx/store';
import { selectIsMenuOpen, selectIsSearching } from '../../../logic/stores/selectors/interactions.selector';
import { interactionsActions } from '../../../logic/stores/actions/interactions.action';
import { LucideAngularModule, Menu, Search, ShoppingCart, X } from 'lucide-angular';
import { SkeletonDirective } from '../../../logic/directives/skeleton/skeleton.directive';
import { selectSection } from '../../../logic/stores/selectors/storyblok.selectors';
import { InternationalizationBarComponent } from '../internationalization-bar/internationalization-bar.component';
import { UserIconComponent } from '../svg-icons/user-icon/userIcon.component';
import { LogoComponent } from '../svg-icons/logo/logo.component';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    ButtonComponent,
    SearchFieldComponent,
    RouterModule,
    NavlinksComponent,
    MenuComponent,
    LucideAngularModule,
    SkeletonDirective,
    InternationalizationBarComponent,
    UserIconComponent,
    LogoComponent,
  ],
  templateUrl: './header.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private readonly store = inject(Store);
  protected readonly searchIcon = Search;
  protected readonly cartIcon = ShoppingCart;
  protected readonly menuIcon = Menu;
  protected readonly closeIcon = X;
  protected isSearching = this.store.selectSignal(selectIsSearching);
  protected isMenuOpen = this.store.selectSignal(selectIsMenuOpen);
  protected isAuthenticated!: boolean;
  protected cdRef = inject(ChangeDetectorRef);

  protected readonly data = this.store.selectSignal(selectSection('header'));

  protected onOpenSearchField() {
    if (this.isSearching()) this.store.dispatch(interactionsActions.closeSearchField());
    else this.store.dispatch(interactionsActions.openSearchField());
  }

  protected onMenuToggle() {
    if (this.isMenuOpen()) this.store.dispatch(interactionsActions.closeMenu());
    else this.store.dispatch(interactionsActions.openMenu());
  }
}
