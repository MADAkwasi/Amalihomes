import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-x-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './x-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class XIconComponent {}
