import { Injectable, Renderer2, RendererFactory2, NgZone } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { TawkApi } from '../../../types/chatbot';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class TawkToService {
  private chatEndedSubject = new Subject<void>();
  private chatMinimizedSubject = new Subject<void>();
  private onLoadSubject = new Subject<void>();
  private renderer: Renderer2;
  private tawkScript: HTMLScriptElement | null = null;
  private isLoaded = false;

  constructor(private rendererFactory: RendererFactory2, private ngZone: NgZone) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  public onChatEnded(): Observable<void> {
    return this.chatEndedSubject.asObservable();
  }

  public onChatMinimized(): Observable<void> {
    return this.chatMinimizedSubject.asObservable();
  }

  public onLoad(): Observable<void> {
    return this.onLoadSubject.asObservable();
  }

  public loadTawkTo(): void {
    if (this.isLoaded || typeof window === 'undefined') return;

    window.Tawk_API = window.Tawk_API || ({} as TawkApi);
    window.Tawk_API.onLoad = () => {
      this.ngZone.run(() => {
        this.onLoadSubject.next();
      });
    };

    this.ngZone.runOutsideAngular(() => {
      this.tawkScript = this.renderer.createElement('script');
      if (this.tawkScript) {
        this.tawkScript.async = true;
        this.tawkScript.src = `https://embed.tawk.to/${environment.TAWK_TO_KEY}/1ipu1u4dq`;
        this.tawkScript.charset = 'UTF-8';
        this.tawkScript.setAttribute('crossorigin', '*');

        this.tawkScript.onload = () => {
          this.isLoaded = true;
          this.setupListeners();
        };
      }

      this.renderer.appendChild(document.body, this.tawkScript);
    });
  }

  public showTawkTo(): void {
    if (!this.isLoaded || !window.Tawk_API) {
      this.loadTawkTo();
      return;
    }
    this.ngZone.run(() => {
      window.Tawk_API?.showWidget();
      window.Tawk_API?.maximize();
    });
  }

  public hideTawkTo(): void {
    if (this.isLoaded && window.Tawk_API) {
      this.ngZone.run(() => {
        window.Tawk_API?.minimize();
        window.Tawk_API?.hideWidget();
      });
    }
  }

  public maximize(): void {
    if (this.isLoaded && window.Tawk_API) {
      this.ngZone.run(() => {
        window.Tawk_API?.maximize();
      });
    }
  }

  private setupListeners(): void {
    if (!window.Tawk_API) {
      return;
    }

    window.Tawk_API.onChatEnded = () => {
      this.ngZone.run(() => {
        this.chatEndedSubject.next();
      });
    };

    window.Tawk_API.onChatMinimized = () => {
      this.ngZone.run(() => {
        this.chatMinimizedSubject.next();
      });
    };
  }
}
