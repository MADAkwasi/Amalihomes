import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
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
import { TawkChatComponent } from '../tawk-chat/tawk-chat.component';

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
    TawkChatComponent,
  ],
  templateUrl: './chatbot-navigation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatbotNavigationComponent {
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

  protected handleExpandChat() {
    this.expandChat = !this.expandChat;
    if (!this.expandChat) this.resetInterface();
  }

  protected navigateTo(tab: ChatBotTabs) {
    this.selectTab(tab);
  }

  protected navigateToHomeTabEnquiry(enquiry: ChatBotEnquiryType) {
    this.navigatedHomeTabEnquiry = enquiry;
    this.showBackButton = true;
    this.showBottomNavigation = false;
  }

  protected selectTab(tab: ChatBotTabs) {
    if (this.activeTab === tab) return;
    this.activeTab = tab;
    this.showBackButton = ![ChatBotTabs.home, ChatBotTabs.help].includes(tab);
    this.showBottomNavigation = tab !== ChatBotTabs.chat;
    this.resetNestedTabPages();
  }

  protected handleBackButtonClick() {
    this.selectTab(ChatBotTabs.home);
    this.resetHomeTabNavigation();
  }

  private resetHomeTabNavigation() {
    if (this.navigatedHomeTabEnquiry) {
      this.showBackButton = false;
      this.showBottomNavigation = true;
      this.navigatedHomeTabEnquiry = null;
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
