import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatBotEnquiryType, ChatBotSalesRep } from '../../../types/chatbot';
import { TextDirective, ButtonComponent, ImageComponent } from '@amalihomes/shared';
import { mockedEnquiries } from './mocked-data';

@Component({
  selector: 'app-chatbot-home',
  imports: [CommonModule, ImageComponent, TextDirective, ButtonComponent],
  templateUrl: './chatbot-home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatbotHomeComponent {
  public salesRepresentative = input.required<ChatBotSalesRep>();
  public tabNavigation = output<ChatBotEnquiryType>();
  protected readonly enquiryTypes = ChatBotEnquiryType;
  protected readonly enquiries = Object.keys(mockedEnquiries).map(
    (key) => ({ key: key as ChatBotEnquiryType, label: mockedEnquiries[key as ChatBotEnquiryType] } as const),
  );
  protected navigateTo(enquiry: ChatBotEnquiryType): void {
    this.tabNavigation.emit(enquiry);
  }
}
