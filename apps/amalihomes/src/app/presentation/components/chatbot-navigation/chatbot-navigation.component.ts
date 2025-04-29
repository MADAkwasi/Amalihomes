import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatBotSalesRep, ChatBotTabs } from '../../../types/chatbot';
import { ButtonComponent, ImageComponent } from '@amalihomes/shared';
import { LucideAngularModule, X, ChevronLeft } from 'lucide-angular';
import { ChatbotHomeIconComponent } from '../svg-icons/chatbot-home-icon/chatbot-home-icon.component';
import { ChatbotChatIconComponent } from '../svg-icons/chatbot-chat-icon/chatbot-chat-icon.component';
import { ChatbotQuestionIconComponent } from '../svg-icons/chatbot-question-icon/chatbot-question-icon.component';
import { ChatbotHomeComponent } from '../chatbot-home/chatbot-home.component';
import { mockedChatbotPages } from './mocked-data';

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
  ],
  templateUrl: './chatbot-navigation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatbotNavigationComponent {
  public salesRepresentative = input.required<ChatBotSalesRep>();
  protected readonly icons = { X, ChevronLeft };
  protected expandChat = false;
  protected readonly ChatBotTabTypes = ChatBotTabs;
  protected tabs = Object.keys(mockedChatbotPages) as ChatBotTabs[];
  protected activeTab = ChatBotTabs.home;
  protected tabLabels: Record<ChatBotTabs, string> = mockedChatbotPages;

  protected handleExpandChat() {
    this.expandChat = !this.expandChat;
  }

  protected navigateTo(tab: ChatBotTabs) {
    this.selectTab(tab);
  }

  protected showBackButton(show?: boolean) {
    return show || !this.isSelected(this.ChatBotTabTypes.home);
  }

  protected selectTab(tab: ChatBotTabs) {
    this.activeTab = tab;
  }

  protected isSelected(tab: ChatBotTabs) {
    return this.activeTab === tab;
  }
}
