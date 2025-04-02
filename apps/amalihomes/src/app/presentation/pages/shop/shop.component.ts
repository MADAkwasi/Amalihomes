import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shop',
  imports: [CommonModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css',
})
export class ShopComponent {
  time = signal(this.getCurentTime());

  constructor() {
    setInterval(() => {
      this.time.set(this.getCurentTime());
    }, 1000);
  }

  getCurentTime() {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    };
    return date.toLocaleTimeString('en-US', options);
  }
}
