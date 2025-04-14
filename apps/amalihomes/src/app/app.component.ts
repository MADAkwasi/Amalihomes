import { Component, inject, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { RootLayoutComponent } from './presentation/layouts/root-layout/root-layout.component';
import { filter } from 'rxjs';
import { InteractionsService } from './logic/services/interactions/interactions.service';

@Component({
  imports: [RouterModule, RootLayoutComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly interactionsService = inject(InteractionsService);
  ngOnInit(): void {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      window.scrollTo(0, 0);
    });

    this.interactionsService.listenToRouteChange();
  }
}
