import { ChangeDetectionStrategy, Component, inject, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../../svg-icons/logo/logo.component';
import { LucideAngularModule, Settings, LogOut, Gift, FileText, MessageCircle } from 'lucide-angular';
import { DashboardNavigationMainTabs, DashboardNavigationSubTabs, DashboardNavigationTabs } from '../data';
import { MessageIconComponent } from '../../svg-icons/message-icon/message-icon.component';
import { LucideIconData } from 'lucide-angular/icons/types';
import { Router, RouterLink } from '@angular/router';
import { TextDirective } from '@amalihomes/shared';

@Component({
  selector: 'app-dashboard-navaigation-panel',
  imports: [CommonModule, LogoComponent, LucideAngularModule, MessageIconComponent, RouterLink, TextDirective],
  templateUrl: './navaigation-panel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavaigationPanelComponent {
  protected readonly router = inject(Router);
  public expandEvent = output<boolean>();
  public selectionEvent = output<DashboardNavigationTabs>();
  protected readonly tabsType = DashboardNavigationTabs;
  protected readonly icons: Record<DashboardNavigationTabs, LucideIconData> = {
    [this.tabsType.Settings]: Settings,
    [this.tabsType.Logout]: LogOut,
    [this.tabsType.Promotions]: Gift,
    [this.tabsType.Reports]: FileText,
    [this.tabsType.Messages]: MessageCircle,
  };
  public selectedTab = input.required<DashboardNavigationTabs>();
  protected mainTabs = DashboardNavigationMainTabs;
  protected subTabs = DashboardNavigationSubTabs;
  protected expanded = signal(true);
  protected toggleExpand() {
    const shouldExpand = !this.expanded();
    this.expanded.set(shouldExpand);
    this.expandEvent.emit(shouldExpand);
  }
}
