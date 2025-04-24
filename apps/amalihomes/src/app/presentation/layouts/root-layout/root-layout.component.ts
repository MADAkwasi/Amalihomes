import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CookieBannerComponent } from '../../components/cookie-banner/cookie-banner.component';

@Component({
  selector: 'app-root-layout',
  imports: [HeaderComponent, FooterComponent, CookieBannerComponent],
  templateUrl: './root-layout.component.html',
})
export class RootLayoutComponent {}
