import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-truck-icon',
  imports: [CommonModule],
  templateUrl: './home-truck-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeTruckIconComponent {}
