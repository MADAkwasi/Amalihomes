import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';
import { InteractionsService } from './logic/services/interactions/interactions.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly interactionsService = inject(InteractionsService);
  private readonly platformID = inject(PLATFORM_ID);

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformID)) {
      this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
        window.scrollTo(0, 0);
      });
    }

    this.interactionsService.listenToRouteChange();
  }
}
