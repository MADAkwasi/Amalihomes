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
  ],
  templateUrl: './header.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private readonly store = inject(Store);
  public readonly searchIcon = Search;
  public readonly cartIcon = ShoppingCart;
  public readonly menuIcon = Menu;
  public readonly closeIcon = X;
  public isSearching = this.store.selectSignal(selectIsSearching);
  public isMenuOpen = this.store.selectSignal(selectIsMenuOpen);
  public isAuthenticated!: boolean;
  public cdRef = inject(ChangeDetectorRef);

  protected readonly data = this.store.selectSignal(selectSection('header'));

  public onOpenSearchField() {
    if (this.isSearching()) this.store.dispatch(interactionsActions.closeSearchField());
    else this.store.dispatch(interactionsActions.openSearchField());
  }

  onMenuToggle() {
    if (this.isMenuOpen()) this.store.dispatch(interactionsActions.closeMenu());
    else this.store.dispatch(interactionsActions.openMenu());
  }
}
