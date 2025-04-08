import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RootLayoutComponent } from './presentation/layouts/root-layout/root-layout.component';
import { ApplicationStore } from './logic/stores';
import { Store } from '@ngrx/store';
import { selectGlobalPageStoreField } from './logic/stores/selectors/global-page';
import { FetchState } from './logic/data/constants';
import { GlobalPageActions } from './logic/stores/actions/global-page';

@Component({
  imports: [RouterModule, RootLayoutComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  private readonly store = inject(Store<ApplicationStore>);
  private readonly selecetedLanguage = this.store.selectSignal(selectGlobalPageStoreField('selectedLanguage'));

  ngOnInit(): void {
    this.store.dispatch(GlobalPageActions.fetchGlobalData({ language: this.selecetedLanguage() }));
  }
}
