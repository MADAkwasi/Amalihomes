import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ChatbotEnquiryComponent } from '../chatbot-enquiry/chatbot-enquiry.component';
import { ButtonComponent } from '../../../shared-ui/components/button/button.component';
import { ChatBotEnquiryType } from '../../../types/chatbot';
import { Store } from '@ngrx/store';
import { selectProducts } from '../../../logic/stores/selectors/dummy-data.selector';

@Component({
  selector: 'app-chatbot-product-enquiry',
  imports: [CommonModule, ChatbotEnquiryComponent, ButtonComponent, CurrencyPipe],
  templateUrl: './chatbot-product-enquiry.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatbotProductEnquiryComponent {
  private readonly store = inject(Store);
  protected readonly enquiryTypes = ChatBotEnquiryType;
  private readonly products = this.store.selectSignal(selectProducts);
  protected readonly selected = signal('');
  protected readonly selectorFieldValue = signal('');
  protected filtedProducts = computed(() => {
    const value = this.selectorFieldValue().trim().toLowerCase();
    if (value.length < 1) return this.products();
    return this.products().filter((product) => product.name.toLowerCase().includes(value));
  });
}
