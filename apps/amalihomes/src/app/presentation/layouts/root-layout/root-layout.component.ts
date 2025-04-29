import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CookieBannerComponent } from '../../components/cookie-banner/cookie-banner.component';
import { ChatbotNavigationComponent } from '../../components/chatbot-navigation/chatbot-navigation.component';
import { salesRepresentativeMock } from '../../components/chatbot-navigation/mocked-data';

@Component({
  selector: 'app-root-layout',
  imports: [HeaderComponent, FooterComponent, CookieBannerComponent, ChatbotNavigationComponent],
  templateUrl: './root-layout.component.html',
})
export class RootLayoutComponent {
  // TODO: Remove chatbot mock data from here.
  protected mockedSalesRep = salesRepresentativeMock;
}
