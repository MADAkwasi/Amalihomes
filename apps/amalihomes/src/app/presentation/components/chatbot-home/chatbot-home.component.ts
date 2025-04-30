import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from '../../../shared-ui/components/image/image.component';
import { ChatBotEnquiryType, ChatBotSalesRep } from '../../../types/chatbot';
import { TextDirective } from '@amalihomes/shared';
import { mockedEnquiries } from './mocked-data';
import { ButtonComponent } from '../../../shared-ui/components/button/button.component';

@Component({
  selector: 'app-chatbot-home',
  imports: [CommonModule, ImageComponent, TextDirective, ButtonComponent],
  templateUrl: './chatbot-home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatbotHomeComponent {
  public salesRepresentative = input.required<ChatBotSalesRep>();
  protected readonly enquiryTypes = ChatBotEnquiryType;
  protected readonly enquiries = Object.keys(mockedEnquiries).map(
    (key) => ({ key, label: mockedEnquiries[key as ChatBotEnquiryType] } as const),
  );
}
