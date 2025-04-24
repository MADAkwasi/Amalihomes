import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-arrow-up',
  standalone: true,
  templateUrl: './arrow-up.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArrowUpComponent {}
