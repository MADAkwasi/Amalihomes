import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-history-icon',
  imports: [CommonModule],
  templateUrl: './order-history-icon.component.html',
})
export class OrderHistoryIconComponent {
  public selected = input(false);
}
