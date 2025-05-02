import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatbotEnquiryComponent } from '../chatbot-enquiry/chatbot-enquiry.component';
import { ButtonComponent, TextDirective } from '@amalihomes/shared';
import { ChatBotEnquiryType } from '../../../types/chatbot';
import { mockedQuestions } from './mocked-data';

@Component({
  selector: 'app-chatbot-general-enquiry',
  imports: [CommonModule, ChatbotEnquiryComponent, TextDirective, ButtonComponent],
  templateUrl: './chatbot-general-enquiry.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatbotGeneralEnquiryComponent {
  protected enquiryTypes = ChatBotEnquiryType;
  protected questions = mockedQuestions;
  protected selected = '';
  private selectorFieldValue = signal('');
  protected filtedQuestions = computed(() => {
    const value = this.selectorFieldValue().trim().toLowerCase();
    if (value.length < 1) return this.questions;
    return this.questions.filter((question) => question.toLowerCase().includes(value));
  });
  protected handleSelectedOrder(selectedQuestion: string) {
    this.selected = selectedQuestion;
  }
  protected handleSelectorFieldValueChange(value: string) {
    this.selectorFieldValue.set(value);
  }
}
