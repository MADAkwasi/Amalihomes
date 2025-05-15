import { Component, computed, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ChatbotNavigationComponent } from '../../components/chatbot-navigation/chatbot-navigation.component';
import { Store } from '@ngrx/store';
import { selectSection } from '../../../logic/stores/selectors/storyblok.selectors';
import { ContactUsComponent } from '../../../shared-ui/components/contact-us/contact-us.component';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root-layout',
  imports: [HeaderComponent, FooterComponent, ChatbotNavigationComponent, ContactUsComponent],
  templateUrl: './root-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RootLayoutComponent {
  private readonly store = inject(Store);
  private readonly router = inject(Router);
  private readonly currentUrl = signal(this.router.url);
  protected readonly contactContent = this.store.selectSignal(selectSection('contact'));
  protected readonly bgColor = computed(() => this.contactContent()?.bgColor?.trim() ?? null);
  protected readonly bgImg = computed(() => this.contactContent()?.image?.[0]?.image ?? null);
  protected readonly bgProps = computed(() => ({
    bgColor: this.bgColor(),
    bgImg: this.bgColor() ? null : this.bgImg(),
  }));
  protected readonly isHomePage = computed(() => this.currentUrl() === '/');
  protected readonly isAuthRoute = computed(() => this.currentUrl() === '/signup' || this.currentUrl() === '/login');

  constructor() {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
      this.currentUrl.set(event.urlAfterRedirects);
    });
  }
}
