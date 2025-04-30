import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chatbot-chat-icon',
  imports: [CommonModule],
  templateUrl: './chatbot-chat-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatbotChatIconComponent {
  public selected = input(false);
}
