import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectIsSearching } from '../../../logic/stores/selectors/interactions.selector';
import { LucideAngularModule, Search } from 'lucide-angular';
import { InputComponent } from '@amalihomes/shared';

@Component({
  selector: 'app-search-field',
  imports: [CommonModule, CommonModule, LucideAngularModule, InputComponent],
  templateUrl: './search-field.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchFieldComponent {
  private readonly store = inject(Store);
  public readonly searchIcon = Search;
  public isSearching = this.store.selectSignal(selectIsSearching);
}
