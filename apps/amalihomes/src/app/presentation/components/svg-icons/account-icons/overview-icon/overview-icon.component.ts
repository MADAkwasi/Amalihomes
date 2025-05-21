import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-overview-icon',
  imports: [CommonModule],
  templateUrl: './overview-icon.component.html',
})
export class OverviewIconComponent {
  public selected = input(false);
}
