import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-responsive-heading',
  templateUrl: './responsive-heading.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResponsiveHeadingComponent {
  public title = input('');
  public description = input('');
}
