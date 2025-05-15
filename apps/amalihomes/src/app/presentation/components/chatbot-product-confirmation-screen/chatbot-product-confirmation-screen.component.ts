import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../types/chatbot';
import { ButtonComponent } from '../../../shared-ui/components/button/button.component';
import { TextDirective } from '@amalihomes/shared';

@Component({
  selector: 'app-chatbot-product-confirmation-screen',
  imports: [CommonModule, ButtonComponent, TextDirective],
  templateUrl: './chatbot-product-confirmation-screen.component.html',
})
export class ChatbotProductConfirmationScreenComponent {
  public readonly selectedProduct = input<Product | null>();
  public readonly confirm = output<boolean | null>();
  public handleReturn = output();
}
