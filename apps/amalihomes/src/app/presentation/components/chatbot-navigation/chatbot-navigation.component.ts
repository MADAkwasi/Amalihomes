import { ChangeDetectionStrategy, Component, computed, inject, NgZone, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatBotEnquiryType, ChatBotTabs, CMSChatbot } from '../../../types/chatbot';
import { ButtonComponent, ImageComponent } from '@amalihomes/shared';
import { LucideAngularModule, X, ChevronLeft } from 'lucide-angular';
import { ChatbotHomeIconComponent } from '../svg-icons/chatbot-home-icon/chatbot-home-icon.component';
import { ChatbotChatIconComponent } from '../svg-icons/chatbot-chat-icon/chatbot-chat-icon.component';
import { ChatbotQuestionIconComponent } from '../svg-icons/chatbot-question-icon/chatbot-question-icon.component';
import { ChatbotHomeComponent } from '../chatbot-home/chatbot-home.component';
import { ChatbotOrderEnquiryComponent } from '../chatbot-order-enquiry/chatbot-order-enquiry.component';
import { ChatbotGeneralEnquiryComponent } from '../chatbot-general-enquiry/chatbot-general-enquiry.component';
import { Store } from '@ngrx/store';
import { selectLocale, selectSection } from '../../../logic/stores/selectors/storyblok.selectors';
import { ChatbotFaqComponent } from '../chatbot-faq/chatbot-faq.component';
import { ChatbotProductEnquiryComponent } from '../chatbot-product-enquiry/chatbot-product-enquiry.component';
import { TawkToService } from '../../../logic/services/tawk-to/tawk-to.service';

@Component({
  selector: 'app-chatbot-navigation',
  imports: [
    CommonModule,
    ImageComponent,
    ButtonComponent,
    LucideAngularModule,
    ChatbotHomeIconComponent,
    ChatbotChatIconComponent,
    ChatbotQuestionIconComponent,
    ChatbotHomeComponent,
    ChatbotOrderEnquiryComponent,
    ChatbotGeneralEnquiryComponent,
    ChatbotFaqComponent,
    ChatbotProductEnquiryComponent,
  ],
  templateUrl: './chatbot-navigation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatbotNavigationComponent implements OnInit {
  protected readonly icons = { X, ChevronLeft };
  protected expandChat = false;
  protected showBackButton = false;
  protected showBottomNavigation = true;
  protected isTawkToOpen = false;
  protected readonly ChatBotTabTypes = ChatBotTabs;
  private readonly store = inject(Store);
  private readonly selectedLocale = this.store.selectSignal(selectLocale);
  private readonly salesContactDetails = this.store.selectSignal(selectSection('contact'));
  protected readonly salesRepresentative = computed(() =>
    this.salesContactDetails()?.salesRep?.find(({ country }) => this.selectedLocale()?.country === country),
  );
  private readonly chatbotData = this.store.selectSignal(selectSection<CMSChatbot>('chatbot'));
  protected readonly chatbotHomeData = computed(() => this.chatbotData()?.home_page[0]);
  protected tabLabels = computed(() => {
    const tabsdata = this.chatbotHomeData()?.tabs[0];
    if (!tabsdata) return;
    const labels = {} as Record<ChatBotTabs, string>;
    this.tabs.forEach((tab) => (labels[tab] = tabsdata[tab][0].value));
    return labels;
  });
  protected tabs = [ChatBotTabs.home, ChatBotTabs.chat, ChatBotTabs.help];
  protected activeTab = ChatBotTabs.home;

  protected readonly homeTabEnquiryTypes = ChatBotEnquiryType;
  protected navigatedHomeTabEnquiry: ChatBotEnquiryType | null = null;

  constructor(
    private readonly ngZone: NgZone,
    private readonly tawkToService: TawkToService,
    private readonly cdr: ChangeDetectorRef,
  ) {
    this.tawkToService.onLoad().subscribe(() => {
      this.tawkToService.hideTawkTo();
    });
  }

  ngOnInit(): void {
    this.tawkToService.loadTawkTo();
    this.tawkToService.onLoad().subscribe(() => {
      this.tawkToService.hideTawkTo();
      this.cdr.markForCheck();
    });
    this.setupTawkToListeners();
  }

  protected handleExpandChat() {
    this.expandChat = !this.expandChat;
    if (!this.expandChat) this.resetInterface();
    this.cdr.markForCheck();
  }

  protected navigateTo(tab: ChatBotTabs) {
    if (tab === ChatBotTabs.chat) {
      this.handleChatTabSelection();
    } else {
      this.selectTab(tab);
    }
  }

  private handleChatTabSelection() {
    this.expandChat = false;
    this.isTawkToOpen = true;
    this.tawkToService.showTawkTo();
    this.cdr.markForCheck();
  }

  private setupTawkToListeners() {
    this.tawkToService.onChatEnded().subscribe(() => {
      this.ngZone.run(() => {
        this.tawkToService.hideTawkTo();
        this.isTawkToOpen = false;
        this.expandChat = true;
        this.resetInterface();
        this.cdr.detectChanges();
      });
    });

    this.tawkToService.onChatMinimized().subscribe(() => {
      this.ngZone.run(() => {
        this.tawkToService.hideTawkTo();
        this.isTawkToOpen = false;
        this.expandChat = true;
        this.cdr.detectChanges();
      });
    });
  }

  protected navigateToHomeTabEnquiry(enquiry: ChatBotEnquiryType) {
    this.navigatedHomeTabEnquiry = enquiry;
    this.showBackButton = true;
    this.showBottomNavigation = false;
    this.cdr.markForCheck();
  }

  protected selectTab(tab: ChatBotTabs) {
    if (this.activeTab === tab) return;
    this.activeTab = tab;
    this.showBackButton = ![ChatBotTabs.home, ChatBotTabs.help].includes(tab);
    this.resetNestedTabPages();
    this.cdr.markForCheck();
  }

  protected handleBackButtonClick() {
    if (this.isSelected(ChatBotTabs.home)) {
      this.resetHomeTabNavigation();
    } else {
      this.selectTab(ChatBotTabs.home);
    }
    this.cdr.markForCheck();
  }

  private resetHomeTabNavigation() {
    if (this.navigatedHomeTabEnquiry) {
      this.showBackButton = false;
      this.showBottomNavigation = true;
      this.navigatedHomeTabEnquiry = null;
      this.cdr.markForCheck();
    }
  }

  private resetInterface() {
    this.activeTab = ChatBotTabs.home;
    this.showBackButton = false;
    this.showBottomNavigation = true;
    this.resetNestedTabPages();
  }

  protected resetNestedTabPages() {
    this.navigatedHomeTabEnquiry = null;
  }

  protected isSelected(tab: ChatBotTabs) {
    return this.activeTab === tab;
  }
}
