import { ChangeDetectionStrategy, Component, computed, inject, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent, TextDirective } from '@amalihomes/shared';
import { LucideAngularModule, ChevronRight } from 'lucide-angular';
import { Store } from '@ngrx/store';
import { selectSection } from '../../../logic/stores/selectors/storyblok.selectors';
import { CMSChatbot } from '../../../types/chatbot';
import { Router } from '@angular/router';
import { FaqEnquiryTabTypes } from '../../../types/storyblok';

@Component({
  selector: 'app-chatbot-faq',
  imports: [CommonModule, TextDirective, ButtonComponent, LucideAngularModule],
  templateUrl: './chatbot-faq.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatbotFaqComponent {
  protected readonly icons = { ChevronRight };
  public closeWidgetEvent = output();
  private readonly router = inject(Router);
  private readonly store = inject(Store);
  private readonly chatbotData = this.store.selectSignal(selectSection<CMSChatbot>('chatbot'));
  protected readonly chatbotFaqData = computed(() => this.chatbotData()?.faq_page[0]);
  protected readonly questionCategories = computed(() => {
    return this.chatbotFaqData()?.categories ?? [];
  });
  protected navigateToFaqPage(enquiryType: FaqEnquiryTabTypes) {
    this.closeWidgetEvent.emit();
    this.router.navigate(['/faqs'], { fragment: `faq-tab-${enquiryType ?? 'orders'}` });
  }
}
