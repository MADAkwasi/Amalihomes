import { ChangeDetectionStrategy, Component, computed, inject, OnInit, output, signal } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ChatbotEnquiryComponent } from '../chatbot-enquiry/chatbot-enquiry.component';
import { ButtonComponent } from '../../../shared-ui/components/button/button.component';
import { ChatBotEnquiryType, Product } from '../../../types/chatbot';
import { Store } from '@ngrx/store';
import { selectProductById, selectProducts } from '../../../logic/stores/selectors/dummy-data.selector';
import { ChatbotProductConfirmationScreenComponent } from '../chatbot-product-confirmation-screen/chatbot-product-confirmation-screen.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chatbot-product-enquiry',
  imports: [
    CommonModule,
    ChatbotEnquiryComponent,
    ButtonComponent,
    CurrencyPipe,
    ChatbotProductConfirmationScreenComponent,
  ],
  templateUrl: './chatbot-product-enquiry.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatbotProductEnquiryComponent implements OnInit {
  private readonly store = inject(Store);
  private readonly products = this.store.selectSignal(selectProducts);
  private readonly route = inject(Router);
  public readonly selectedProduct = signal<Product | null>(null);
  protected readonly productId = signal('');
  protected readonly enquiryTypes = ChatBotEnquiryType;
  protected readonly selected = signal('');
  public readonly return = output();
  protected readonly selectorFieldValue = signal('');
  protected readonly selectedProductName = signal('');
  public readonly isProductConfirmed = signal<boolean | null>(null);
  protected filtedProducts = computed(() => {
    const value = this.selectorFieldValue().trim().toLowerCase();
    if (value.length < 1) return this.products();
    return this.products().filter((product) => product.name.toLowerCase().includes(value));
  });

  ngOnInit(): void {
    const paths = this.route.url.split('/');
    const idIndex = paths.indexOf('product') + 1;
    const productId = paths[idIndex];

    this.selectedProduct.set(this.store.selectSignal(selectProductById(productId))() ?? null);
    this.selectedProductName.set(this.selectedProduct()?.name ?? '');
  }
}
