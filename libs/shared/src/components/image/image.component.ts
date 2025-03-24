import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-image',
  imports: [CommonModule],
  templateUrl: './image.component.html',
  styleUrl: './image.component.css',
})
export class ImageComponent {
  @Input() src = '';
  @Input() alt = '';
  @Input() width = 300;
  @Input() height = 200;
  @Input() orientation: 'portrait' | 'landscape' = 'landscape';
  @Input() class = '';
}
