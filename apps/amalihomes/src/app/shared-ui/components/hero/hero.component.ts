import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lib-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  private activatedRoute = inject(ActivatedRoute);
  public readonly title = input.required<string>();
  public readonly description = input.required<string>();
  public readonly imageUrl = input.required<string | undefined>();
  protected hashFocusedTabId = signal('page-faqs-tabs');
  constructor() {
    const fragment = this.activatedRoute.snapshot.fragment;
    if (fragment) {
      this.hashFocusedTabId.set(fragment);
    }
  }
}
