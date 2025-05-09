import { ChangeDetectionStrategy, Component, computed, inject, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatBotEnquiryType, CMSChatbot } from '../../../types/chatbot';
import { TextDirective, ButtonComponent, ImageComponent } from '@amalihomes/shared';
import { Store } from '@ngrx/store';
import { selectSection } from '../../../logic/stores/selectors/storyblok.selectors';
import { getActualDataFromStoryBlokStory } from '../../../logic/utils';
import { SalesRep } from '../../../types/storyblok';

@Component({
  selector: 'app-chatbot-home',
  imports: [CommonModule, ImageComponent, TextDirective, ButtonComponent],
  templateUrl: './chatbot-home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatbotHomeComponent {
  public salesRepresentative = input.required<SalesRep | undefined>();
  protected salesRepName = computed(() => this.salesRepresentative()?.name ?? '');
  public tabNavigation = output<ChatBotEnquiryType>();
  protected readonly enquiryTypes = ChatBotEnquiryType;
  private readonly store = inject(Store);
  private readonly chatbotData = this.store.selectSignal(selectSection<CMSChatbot>('chatbot'));
  protected readonly chatbotHomeData = computed(() => this.chatbotData()?.home_page[0]);
  protected readonly enquiries = computed(() => {
    const enquirydata = this.chatbotHomeData()?.enquiries[0];
    if (!enquirydata) return [];
    return Object.keys(getActualDataFromStoryBlokStory(enquirydata)).map((enquiry) => ({
      label: enquirydata[enquiry as ChatBotEnquiryType][0].value,
      key: enquiry as ChatBotEnquiryType,
    }));
  });
  protected navigateTo(enquiry: ChatBotEnquiryType): void {
    this.tabNavigation.emit(enquiry);
  }
}
