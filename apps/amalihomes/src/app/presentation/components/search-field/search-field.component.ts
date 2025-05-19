import { Component, inject, input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectIsSearching } from '../../../logic/stores/selectors/interactions.selector';
import { LucideAngularModule, Search } from 'lucide-angular';
import { InputComponent } from '@amalihomes/shared';
import { Section } from '../../../types/storyblok';
import { Router } from '@angular/router';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-field',
  imports: [CommonModule, LucideAngularModule, InputComponent],
  templateUrl: './search-field.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchFieldComponent {
  private readonly store = inject(Store);
  private readonly router = inject(Router);
  private readonly fb = inject(FormBuilder);
  protected readonly searchIcon = Search;
  public readonly searchPlaceholer = input<Section['inputPlaceholder']>();
  protected isSearching = this.store.selectSignal(selectIsSearching);
  protected readonly searchField = {
    keyword: new FormControl(''),
  };
  protected searchForm = this.fb.group(this.searchField);

  get placeholder() {
    return this.searchPlaceholer() ?? '';
  }

  protected handleSearchKeyword() {
    const keyword = this.searchForm.value.keyword?.trim();
    if (this.isSearching() && keyword !== '')
      this.router.navigate(['shop'], {
        queryParams: { search: keyword },
        queryParamsHandling: 'merge',
      });
  }
}
