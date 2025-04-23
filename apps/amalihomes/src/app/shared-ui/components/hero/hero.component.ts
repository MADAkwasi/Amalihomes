import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'lib-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  public readonly title = input.required<string>();
  public readonly description = input.required<string>();
  public readonly imageUrl = input.required<string>();
}
