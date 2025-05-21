import { Component, inject, signal, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@amalihomes/shared';
import { SearchFieldComponent } from '../search-field/search-field.component';
import { Router, RouterModule } from '@angular/router';
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
import { CookieBannerComponent } from '../cookie-banner/cookie-banner.component';
import { selectUserAuthenticationState } from '../../../logic/stores/selectors/auth.selector';
import { headerMenuItems } from '../../../logic/data/account';
import { LogoutModalComponent } from '../logout-modal/logout-modal.component';
import { AuthService } from '../../../logic/services/firebase/auth.service';
import { logout } from '../../../logic/stores/actions/auth.actions';

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
    CookieBannerComponent,
    LogoutModalComponent,
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
  protected readonly menuItems = headerMenuItems;
  protected isProfileOpen = signal(false);
  protected readonly data = this.store.selectSignal(selectSection('header'));
  protected authenticatedUser = this.store.selectSignal(selectUserAuthenticationState);
  private readonly authService = inject(AuthService);

  private router: Router;
  constructor(router: Router) {
    this.router = router;
  }

  @ViewChild(LogoutModalComponent) logoutModal!: LogoutModalComponent;

  protected onOpenSearchField() {
    if (this.isSearching()) this.store.dispatch(interactionsActions.closeSearchField());
    else this.store.dispatch(interactionsActions.openSearchField());
  }
  protected navigate(route: string): void {
    this.router.navigate(['/account', route]);
  }

  protected toggleProfile() {
    this.isProfileOpen.set(!this.isProfileOpen());
  }

  protected onMenuToggle() {
    if (this.isMenuOpen()) this.store.dispatch(interactionsActions.closeMenu());
    else this.store.dispatch(interactionsActions.openMenu());
  }

  protected onLogoutClick(): void {
    this.logoutModal.open();
  }

  protected confirmLogout(): void {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/']);
      this.store.dispatch(logout());
    });
  }
}
