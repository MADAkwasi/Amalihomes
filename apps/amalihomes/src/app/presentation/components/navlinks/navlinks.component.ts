import { Component, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { navLinks } from '../../../logic/data/constants/links';
import { Store } from '@ngrx/store';
import { selectIsMenuOpen } from '../../../logic/stores/selectors/interactions.selector';
import { interactionsActions } from '../../../logic/stores/actions/interactions.action';

@Component({
  selector: 'app-navlinks',
  imports: [CommonModule, RouterModule],
  templateUrl: './navlinks.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavlinksComponent {
  private readonly store = inject(Store);
  public readonly navLinks = signal(navLinks);
  public isMenuOpen = this.store.selectSignal(selectIsMenuOpen);

  public onCloseMenu() {
    this.store.dispatch(interactionsActions.closeMenu());
  }
}
