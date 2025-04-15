import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './userIcon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserIconComponent {}
