import { Component, inject, computed, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { TextDirective } from '@amalihomes/shared';
import { selectUserAuthenticationState } from 'apps/amalihomes/src/app/logic/stores/selectors/auth.selector';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-header',
  imports: [CommonModule, BreadcrumbComponent, TextDirective],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private store = inject(Store);
  protected authenticatedUser = this.store.selectSignal(selectUserAuthenticationState);
  protected userName = computed(() => {
    const fullName = this.authenticatedUser()?.user?.full_name;
    if (!fullName) return 'Guest';

    const firstName = fullName.trim().split(' ')[0];
    return firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
  });
}
