import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-linkedin-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './linkedin-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkedInIconComponent {}
