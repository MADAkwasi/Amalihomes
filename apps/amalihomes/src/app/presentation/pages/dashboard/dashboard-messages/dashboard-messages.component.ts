import { ChangeDetectionStrategy, Component, computed, inject, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardNavigationTabs } from '../../../components/dashboard/data';
import { ButtonComponent, TextDirective, InputComponent } from '@amalihomes/shared';
import { AllDashboardMessageTabs, AllMessages, DashboardMessage, DashboardMessageTab } from './data';
import { LucideAngularModule, ChevronDown, Search, MoreVertical } from 'lucide-angular';
import { Router } from '@angular/router';
import { PlatformDetectorService } from 'apps/amalihomes/src/app/logic/services/platform-detector/platform-detector.service';
import { getInitialTab } from '../util';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard-messages-page',
  imports: [CommonModule, TextDirective, ButtonComponent, LucideAngularModule, InputComponent, ReactiveFormsModule],
  templateUrl: './dashboard-messages.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardMessagesComponent {
  protected readonly tabName = DashboardNavigationTabs.Messages;
  protected tabTypes = DashboardMessageTab;
  protected messageTabs = AllDashboardMessageTabs;
  protected icons = { ChevronDown, Search, MoreVertical };
  protected searchControl = new FormControl('');
  private platform = inject(PlatformDetectorService);
  protected router = inject(Router);
  public forwardDialogEvent = output();
  protected showMoreOptions = signal(false);
  private searchTerm = signal('');
  protected allMessages = signal(AllMessages);
  protected selectedMessage = signal<DashboardMessage | null>(null);
  protected selectedTab = signal(this.tabTypes.All);

  protected selectedTabMessagesLength = computed(
    () => this.allMessages().filter((message) => message.status === this.selectedTab()).length,
  );

  protected tabMessages = computed(() => {
    return {
      [this.tabTypes.All]: this.allMessages().filter((message) =>
        this.messageHasSearchterm(message, this.searchTerm(), this.tabTypes.All),
      ),

      [this.tabTypes.Read]: this.allMessages()
        .filter((message) => message.status === this.tabTypes.Read)
        .filter((message) => this.messageHasSearchterm(message, this.searchTerm(), this.tabTypes.Read)),

      [this.tabTypes.Trash]: this.allMessages()
        .filter((message) => message.status === this.tabTypes.Trash)
        .filter((message) => this.messageHasSearchterm(message, this.searchTerm(), this.tabTypes.Trash)),

      [this.tabTypes.Unread]: this.allMessages()
        .filter((message) => message.status === this.tabTypes.Unread)
        .filter((message) => this.messageHasSearchterm(message, this.searchTerm(), this.tabTypes.Unread)),

      [this.tabTypes.Forwarded]: this.allMessages()
        .filter((message) => message.status === this.tabTypes.Forwarded)
        .filter((message) => this.messageHasSearchterm(message, this.searchTerm(), this.tabTypes.Forwarded)),
    };
  });

  constructor() {
    if (this.platform.isPlatformBrowser()) {
      const tab = getInitialTab({ index: 2, mustMatch: ['dashboard', 'messages'] }) as DashboardMessageTab;
      this.selectedTab.set(tab);
      this.searchControl.valueChanges.subscribe((value) => this.searchTerm.set(value ?? ''));
    }
  }

  protected parseDate(time: number) {
    return new Date(time).toLocaleString('en-US', {
      month: 'short',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  }

  protected messageHasSearchterm(messageData: DashboardMessage, searchTerm: string, tab: DashboardMessageTab) {
    /**
     * Search strategy
     * In order to capture all possible messages related to the search term,
     * 1. Convert the message data into string and check if it includes the search term.
     * 2. Search should capture all related messages in current tab.
     */

    if (tab !== this.selectedTab()) return true;
    searchTerm = searchTerm.trim().toLowerCase();
    const searchable = `${messageData.date} ${messageData.message} ${messageData.subject} ${messageData.username}`;
    return searchable.toLowerCase().includes(searchTerm);
  }
}
