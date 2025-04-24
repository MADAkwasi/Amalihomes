import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-phone-icon',
  standalone: true,
  templateUrl: './phone.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhoneComponent {}
