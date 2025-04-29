import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chatbot-question-icon',
  imports: [CommonModule],
  templateUrl: './chatbot-question-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatbotQuestionIconComponent {
  public selected = input(false);
}
