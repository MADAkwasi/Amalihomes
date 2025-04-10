import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-root-layout',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './root-layout.component.html',
})
export class RootLayoutComponent {}
