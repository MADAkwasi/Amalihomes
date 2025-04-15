import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-facebook-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './facebook-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FacebookIconComponent {}
