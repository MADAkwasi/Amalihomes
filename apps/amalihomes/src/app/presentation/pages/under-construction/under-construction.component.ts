import { Component, signal, inject, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-under-construction',
  imports: [CommonModule],
  templateUrl: './under-construction.component.html',
  styleUrl: './under-construction.component.css',
})
export class UnderConstructionComponent implements OnInit {
  private readonly router = inject(Router);
  protected time = signal(this.getCurrentTime());
  protected currentRoute = signal('');

  constructor() {
    setInterval(() => {
      this.time.set(this.getCurrentTime());
    }, 1000);
  }

  ngOnInit(): void {
    this.currentRoute.set(this.router.url.replace('/', ''));

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) this.currentRoute.set(event.urlAfterRedirects.replace('/', ''));
    });
  }

  protected getCurrentTime() {
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
