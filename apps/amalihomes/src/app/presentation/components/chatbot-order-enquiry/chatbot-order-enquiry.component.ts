import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatbotEnquiryComponent } from '../chatbot-enquiry/chatbot-enquiry.component';
import { ChatBotEnquiryType } from '../../../types/chatbot';
import { mockedOrders } from './mocked-data';
import { ButtonComponent, TextDirective } from '@amalihomes/shared';

@Component({
  selector: 'app-chatbot-order-enquiry',
  imports: [CommonModule, ChatbotEnquiryComponent, TextDirective, ButtonComponent],
  templateUrl: './chatbot-order-enquiry.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatbotOrderEnquiryComponent {
  protected enquiryTypes = ChatBotEnquiryType;
  protected orders = mockedOrders;
  protected selected = signal('');
  protected selectorFieldValue = signal('');
  protected filtedOrders = computed(() => {
    const value = this.selectorFieldValue().trim().toLowerCase();
    if (value.length < 1) return this.orders;
    return this.orders.filter((order) => order.orderId.toLowerCase().includes(value));
  });
}
