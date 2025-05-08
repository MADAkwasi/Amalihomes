import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatbotEnquiryComponent } from '../chatbot-enquiry/chatbot-enquiry.component';
import { ButtonComponent, TextDirective } from '@amalihomes/shared';
import { ChatBotEnquiryType, CMSChatbot } from '../../../types/chatbot';
import { Store } from '@ngrx/store';
import { selectSection } from '../../../logic/stores/selectors/storyblok.selectors';

@Component({
  selector: 'app-chatbot-general-enquiry',
  imports: [CommonModule, ChatbotEnquiryComponent, TextDirective, ButtonComponent],
  templateUrl: './chatbot-general-enquiry.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatbotGeneralEnquiryComponent {
  private readonly store = inject(Store);
  protected readonly chatbotData = this.store.selectSignal(selectSection<CMSChatbot>('chatbot'));
  protected enquiryTypes = ChatBotEnquiryType;
  protected questions = computed(() => {
    return this.chatbotData()?.general_enquiry[0].questions.map((question) => question.value);
  });
  protected selected = '';
  private readonly selectorFieldValue = signal('');
  protected filtedQuestions = computed(() => {
    const value = this.selectorFieldValue().trim().toLowerCase();
    const questions = this.questions() ?? [];
    if (value.length < 1) return questions;
    return questions.filter((question) => question.toLowerCase().includes(value));
  });
  protected handleSelectedOrder(selectedQuestion: string) {
    this.selected = selectedQuestion;
  }
  protected handleSelectorFieldValueChange(value: string) {
    this.selectorFieldValue.set(value);
  }
}
