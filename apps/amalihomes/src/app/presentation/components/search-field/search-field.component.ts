import { Component, inject, input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectIsSearching } from '../../../logic/stores/selectors/interactions.selector';
import { LucideAngularModule, Search } from 'lucide-angular';
import { InputComponent } from '@amalihomes/shared';
import { Section } from '../../../types/storyblok';

@Component({
  selector: 'app-search-field',
  imports: [CommonModule, LucideAngularModule, InputComponent],
  templateUrl: './search-field.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchFieldComponent {
  private readonly store = inject(Store);
  protected readonly searchIcon = Search;
  public readonly searchPlaceholer = input<Section['inputPlaceholder']>();
  protected isSearching = this.store.selectSignal(selectIsSearching);

  get placeholder() {
    return this.searchPlaceholer() ?? '';
  }
}
