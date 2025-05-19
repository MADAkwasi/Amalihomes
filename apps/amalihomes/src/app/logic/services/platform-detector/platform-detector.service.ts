import { isPlatformServer } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlatformDetectorService {
  private platformId = inject(PLATFORM_ID);
  public isPlatformBrowser() {
    return !isPlatformServer(this.platformId);
  }
}
