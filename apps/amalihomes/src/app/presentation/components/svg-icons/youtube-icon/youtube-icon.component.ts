import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-youtube-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './youtube-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class YoutubeIconComponent {}
