import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-address-icon',
  imports: [CommonModule],
  templateUrl: './address-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddressIconComponent {
  public selected = input(false);
}
