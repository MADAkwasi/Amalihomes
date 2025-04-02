import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  time = signal(this.getCurrentTime());
  constructor() {
    setInterval(() => {
      this.time.set(this.getCurrentTime());
    }, 1000);
  }

  getCurrentTime() {
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
