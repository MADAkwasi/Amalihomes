import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-award-icon',
  imports: [CommonModule],
  templateUrl: './home-award-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeAwardIconComponent {}
