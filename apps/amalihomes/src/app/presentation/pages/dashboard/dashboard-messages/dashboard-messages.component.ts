import { ChangeDetectionStrategy, Component, computed, inject, OnInit, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardNavigationTabs } from '../../../components/dashboard/data';
import { ButtonComponent, TextDirective, InputComponent } from '@amalihomes/shared';
import { AllDashboardMessageTabs, AllMessages, DashboardMessage, DashboardMessageTab } from './data';
import { LucideAngularModule, ChevronDown, Search, MoreVertical } from 'lucide-angular';
import { Router } from '@angular/router';
import { PlatformDetectorService } from 'apps/amalihomes/src/app/logic/services/platform-detector/platform-detector.service';
import { getInitialTab } from '../util';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, take } from 'rxjs';
import { SupabaseService } from 'apps/amalihomes/src/app/logic/services/supabase/supabase.service';
import { Store } from '@ngrx/store';
import { selectUserAuthenticationState } from 'apps/amalihomes/src/app/logic/stores/selectors/auth.selector';

@Component({
  selector: 'app-dashboard-messages-page',
  imports: [CommonModule, TextDirective, ButtonComponent, LucideAngularModule, InputComponent, ReactiveFormsModule],
  templateUrl: './dashboard-messages.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardMessagesComponent implements OnInit {
  protected messageTabs = AllDashboardMessageTabs;
  protected icons = { ChevronDown, Search, MoreVertical };
  protected readonly tabName = DashboardNavigationTabs.Messages;
  protected tabTypes = DashboardMessageTab;
  protected searchControl = new FormControl('');

  private store = inject(Store);
  protected router = inject(Router);
  private platform = inject(PlatformDetectorService);
  private supabaseService = inject(SupabaseService);

  public forwardDialogEvent = output();

  private authStore = this.store.selectSignal(selectUserAuthenticationState);
  protected showMoreOptions = signal(false);
  private searchTerm = signal('');
  protected allMessages = signal(AllMessages);
  protected selectedMessage = signal<DashboardMessage | null>(null);
  protected selectedTab = signal(this.tabTypes.All);

  private loggedInSalesPersonnel = computed(() => this.authStore().user);
  protected selectedTabMessagesLength = computed(
    () => this.allMessages().filter((message) => message.status === this.selectedTab()).length,
  );
  protected tabMessages = computed(() => {
    return {
      [this.tabTypes.All]: this.allMessages().filter((message) =>
        this.messageHasSearchterm(message, this.searchTerm(), this.tabTypes.All),
      ),
      [this.tabTypes.Read]: this.getFilteredMessage(this.tabTypes.Read),
      [this.tabTypes.Trash]: this.getFilteredMessage(this.tabTypes.Trash),
      [this.tabTypes.Unread]: this.getFilteredMessage(this.tabTypes.Unread),
      [this.tabTypes.Forwarded]: this.getFilteredMessage(this.tabTypes.Forwarded),
    };
  });

  private getFilteredMessage(tab: DashboardMessageTab) {
    return this.allMessages()
      .filter((message) => message.status === tab)
      .filter((message) => this.messageHasSearchterm(message, this.searchTerm(), tab));
  }

  constructor() {
    if (this.platform.isPlatformBrowser()) {
      const tab = getInitialTab({ index: 2, mustMatch: ['dashboard', 'messages'] }) as DashboardMessageTab;
      this.selectedTab.set(tab);
      this.searchControl.valueChanges.pipe(debounceTime(200)).subscribe((value) => this.searchTerm.set(value ?? ''));
    }
  }

  ngOnInit() {
    const user = this.loggedInSalesPersonnel();
    if (user) {
      this.supabaseService
        .getSalesPersonnelDashboardMessages(user.email)
        .pipe(take(1))
        .subscribe((messages) =>
          this.allMessages.set(messages.map((data) => ({ ...data, username: 'Anonymous User' } as DashboardMessage))),
        );
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

  protected readMessage(message: DashboardMessage) {
    this.selectedMessage.set(message);
    if (message.status === DashboardMessageTab.Unread) {
      this.supabaseService
        .updateSalesPersonnelDashboardMessageStatus(message.id, DashboardMessageTab.Read)
        .pipe(take(1))
        .subscribe((updated) => {
          if (updated) {
            const updatedMessage = { ...message, status: DashboardMessageTab.Read };
            if (this.selectedMessage()?.id === message.id) {
              this.selectedMessage.set(updatedMessage);
            }
            this.updateMessage(updatedMessage);
          }
        });
    }
  }

  protected deleteSelectedMessage() {
    const message = this.selectedMessage();
    if (!message) return;
    if (this.selectedTab() === DashboardMessageTab.Trash) {
      // Completely delete from database
      this.supabaseService
        .deleteSalesPersonnelDashboardMessageStatus(message.id)
        .pipe(take(1))
        .subscribe((deleted) => {
          if (deleted) {
            if (this.selectedMessage()?.id === message.id) {
              this.selectedMessage.set(null);
            }
            this.allMessages.set(this.allMessages().filter((current) => current.id !== message.id));
          }
        });
    } else {
      // Move message to trash
      this.supabaseService
        .updateSalesPersonnelDashboardMessageStatus(message.id, DashboardMessageTab.Trash)
        .pipe(take(1))
        .subscribe((updated) => {
          if (updated) {
            const updatedMessage = { ...message, status: DashboardMessageTab.Trash };
            if (this.selectedMessage()?.id === message.id) {
              this.selectedMessage.set(null);
            }
            this.updateMessage(updatedMessage);
          }
        });
    }
  }

  private updateMessage(updatedMessage: DashboardMessage) {
    const messageIndex = this.allMessages().findIndex((current) => current.id === updatedMessage.id);
    if (messageIndex >= 0) {
      const updatedMessages = [
        ...this.allMessages().slice(0, messageIndex),
        updatedMessage,
        ...this.allMessages().slice(messageIndex + 1),
      ];
      this.allMessages.set(updatedMessages);
    }
  }
}
