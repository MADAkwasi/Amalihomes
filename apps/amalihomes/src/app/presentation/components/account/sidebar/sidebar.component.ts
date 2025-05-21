import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { SidebarIconComponent } from '../sidebar-icon/sidebar-icon.component';
import { LogoutIconComponent } from '../../svg-icons/index';
import { LogoutModalComponent } from '../../logout-modal/logout-modal.component';
import { menuItems } from 'apps/amalihomes/src/app/logic/data/account';
import { AuthService } from 'apps/amalihomes/src/app/logic/services/firebase/auth.service';
import { Store } from '@ngrx/store';
import { logout } from 'apps/amalihomes/src/app/logic/stores/actions/auth.actions';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, SidebarIconComponent, LogoutIconComponent, LogoutModalComponent],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  private activeRoute = 'overview';
  protected readonly menuItems = menuItems;
  private readonly store = inject(Store);

  @ViewChild(LogoutModalComponent) logoutModal!: LogoutModalComponent;

  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly authService = inject(AuthService);

  ngOnInit(): void {
    this.activatedRoute.url.subscribe((segments) => {
      const path = segments[segments.length - 1]?.path || 'overview';
      this.activeRoute = path;
    });
  }

  protected navigate(route: string): void {
    this.activeRoute = route;
    this.router.navigate(['/account', route]);
  }

  protected onLogoutClicked(): void {
    this.logoutModal.open();
  }

  protected isSelected(route: string): boolean {
    return this.activeRoute === route;
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
