import { Component, inject, input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectIsMenuOpen } from '../../../logic/stores/selectors/interactions.selector';
import { interactionsActions } from '../../../logic/stores/actions/interactions.action';
import { StoryblokNavLink } from '../../../types/storyblok';

@Component({
  selector: 'app-navlinks',
  imports: [CommonModule, RouterModule],
  templateUrl: './navlinks.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavlinksComponent {
  private readonly store = inject(Store);
  public readonly navLinks = input.required<StoryblokNavLink[]>();
  protected isMenuOpen = this.store.selectSignal(selectIsMenuOpen);

  protected onCloseMenu() {
    this.store.dispatch(interactionsActions.closeMenu());
  }
}
