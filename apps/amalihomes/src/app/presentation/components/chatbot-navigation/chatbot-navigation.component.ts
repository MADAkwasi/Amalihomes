import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatBotEnquiryType, ChatBotSalesRep, ChatBotTabs } from '../../../types/chatbot';
import { ButtonComponent, ImageComponent } from '@amalihomes/shared';
import { LucideAngularModule, X, ChevronLeft } from 'lucide-angular';
import { ChatbotHomeIconComponent } from '../svg-icons/chatbot-home-icon/chatbot-home-icon.component';
import { ChatbotChatIconComponent } from '../svg-icons/chatbot-chat-icon/chatbot-chat-icon.component';
import { ChatbotQuestionIconComponent } from '../svg-icons/chatbot-question-icon/chatbot-question-icon.component';
import { ChatbotHomeComponent } from '../chatbot-home/chatbot-home.component';
import { mockedChatbotPages } from './mocked-data';
import { ChatbotOrderEnquiryComponent } from '../chatbot-order-enquiry/chatbot-order-enquiry.component';
import { ChatbotGeneralEnquiryComponent } from '../chatbot-general-enquiry/chatbot-general-enquiry.component';

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
  ],
  templateUrl: './chatbot-navigation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatbotNavigationComponent {
  public salesRepresentative = input.required<ChatBotSalesRep>();
  protected readonly icons = { X, ChevronLeft };
  protected expandChat = false;
  protected showBackButton = false;
  protected showBottomNavigation = true;
  protected readonly ChatBotTabTypes = ChatBotTabs;
  protected tabs = Object.keys(mockedChatbotPages) as ChatBotTabs[];
  protected activeTab = ChatBotTabs.home;
  protected tabLabels: Record<ChatBotTabs, string> = mockedChatbotPages;

  protected readonly homeTabEnquiryTypes = ChatBotEnquiryType;
  protected navigatedHomeTabEnquiry: ChatBotEnquiryType | null = null;
  protected navigateToHomeTabEnquiry(enquiry: ChatBotEnquiryType) {
    this.navigatedHomeTabEnquiry = enquiry;
    this.showBackButton = true;
    this.showBottomNavigation = false;
  }

  protected handleExpandChat() {
    this.expandChat = !this.expandChat;
  }

  protected navigateTo(tab: ChatBotTabs) {
    this.selectTab(tab);
  }

  protected selectTab(tab: ChatBotTabs) {
    if (this.activeTab === tab) return;
    this.activeTab = tab;
    this.showBackButton = tab !== ChatBotTabs.home;
    this.resetNestedTabPages();
  }

  protected isSelected(tab: ChatBotTabs) {
    return this.activeTab === tab;
  }

  protected handleBackButtonClick() {
    if (this.isSelected(ChatBotTabs.home)) {
      if (this.navigatedHomeTabEnquiry) {
        this.showBackButton = false;
        this.showBottomNavigation = true;
        this.navigatedHomeTabEnquiry = null;
      }
    } else {
      // Handle other tab-specific navigations if any else go back to home tab
      this.selectTab(ChatBotTabs.home);
    }
  }

  protected resetNestedTabPages() {
    this.navigatedHomeTabEnquiry = null;
  }
}
