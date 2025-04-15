import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RootLayoutComponent } from './presentation/layouts/root-layout/root-layout.component';

@Component({
  imports: [RouterModule, RootLayoutComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {}
