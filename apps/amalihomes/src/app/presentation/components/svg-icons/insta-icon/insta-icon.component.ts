import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-insta-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './insta-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InstaIconComponent {}
