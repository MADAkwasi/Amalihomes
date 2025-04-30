import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chatbot-home-icon',
  imports: [CommonModule],
  templateUrl: './chatbot-home-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatbotHomeIconComponent {
  public selected = input(false);
}
