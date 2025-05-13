import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { environment } from '../../../environments/env';

@Component({
  selector: 'app-tawk-chat',
  templateUrl: './tawk-chat.component.html',
})
export class TawkChatComponent implements OnInit {
  tawkUrl: SafeResourceUrl = '';

  constructor(private sanitizer: DomSanitizer) {
    if (!environment.TAWK_API_KEY || !environment.TAWK_WIDGET_ID) {
      console.error('TawkTo API key or widget ID is missing in the environment variables.');
    }
  }

  ngOnInit(): void {
    const tawkToKey = environment.TAWK_API_KEY;
    const widgetId = environment.TAWK_WIDGET_ID;
    const url = `https://tawk.to/chat/${tawkToKey}/${widgetId}`;
    this.tawkUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
