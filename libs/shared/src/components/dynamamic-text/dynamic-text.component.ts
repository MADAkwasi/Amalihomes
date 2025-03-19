import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

type AllowedTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

@Component({
  selector: 'lib-dynamic-text',
  imports: [CommonModule],
  templateUrl: './dynamic-text.component.html',
  styleUrl: './dynamic-text.component.css',
})
export class DynamicTextComponent {
  @Input() tagName: AllowedTags = 'p';
  @Input() text = '';
  @Input() className = '';
}
