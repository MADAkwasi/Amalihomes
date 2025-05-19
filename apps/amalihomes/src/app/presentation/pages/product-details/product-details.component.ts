import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  OnInit,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { CommonModule, CurrencyPipe, isPlatformBrowser } from '@angular/common';
import { ButtonComponent, TextDirective } from '@amalihomes/shared';
import { Store } from '@ngrx/store';
import { selectProductById } from '../../../logic/stores/selectors/dummy-data.selector';
import { ChevronRight, LucideAngularModule, Minus, Plus } from 'lucide-angular';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Localization } from '../../../logic/data/constants/localization';
import { selectLocale } from '../../../logic/stores/selectors/storyblok.selectors';
import { StoryblokPageActions } from '../../../logic/stores/actions/storyblok.actions';
import { Product } from '../../../types/chatbot';
import { RatingsComponent } from '../../components/ratings/ratings.component';
import { RootLayoutComponent } from '../../layouts/root-layout/root-layout.component';
import { ProductDetailsMetaData } from './static-meta-data';
import { MetaTagsService } from '../../../logic/services/meta-tags/meta-tags.service';

@Component({
  selector: 'app-product-details',
  imports: [
    CommonModule,
    ButtonComponent,
    CurrencyPipe,
    TextDirective,
    LucideAngularModule,
    RouterLink,
    RatingsComponent,
    RootLayoutComponent,
  ],
  templateUrl: './product-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailsComponent implements OnInit {
  private readonly store = inject(Store);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly route = inject(ActivatedRoute);
  private readonly pageHeadTags = inject(MetaTagsService);
  protected readonly productId = signal('');
  protected readonly selectedColor = signal(0);
  protected readonly product = signal<Product | undefined>(undefined);
  protected readonly selectedLanguage = this.store.selectSignal(selectLocale);
  protected readonly icons = { Minus, Plus, ChevronRight };
  protected readonly quantity = signal(1);
  protected readonly ratingsStars = computed(() => {
    const rating = this.product()?.ratings ?? 0;
    return Array.from({ length: 5 }, (_, i) => rating >= i + 1);
  });

  constructor() {
    effect(() => {
      const id = this.productId();
      this.product.set(this.store.selectSignal(selectProductById(id))());

      this.pageHeadTags.updateMetaData(
        ProductDetailsMetaData({
          id: this.productId(),
          name: this.product()?.name ?? '',
          description: this.product()?.description ?? '',
        }),
      );
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('productId') ?? '';
      this.productId.set(id);
    });

    let langCode = '';

    if (isPlatformBrowser(this.platformId)) {
      const storedLocale: Localization = JSON.parse(localStorage.getItem('locale') ?? '{}');
      langCode = storedLocale.languageCode ?? this.selectedLanguage()?.languageCode ?? 'en';
    }

    this.store.dispatch(
      StoryblokPageActions.loadPage({
        slug: 'shop/product',
        language: langCode,
        version: 'draft',
      }),
    );
  }

  protected handleQuantityChange(operation: 'add' | 'minus') {
    if (operation === 'add') this.quantity.set(this.quantity() + 1);
    else if (this.quantity() > 1) this.quantity.set(this.quantity() - 1);
  }
}
