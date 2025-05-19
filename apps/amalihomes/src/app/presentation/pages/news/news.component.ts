import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootLayoutComponent } from '../../layouts/root-layout/root-layout.component';

@Component({
  selector: 'app-news',
  imports: [CommonModule, RootLayoutComponent],
  templateUrl: './news.component.html',
})
export class NewsComponent {}
