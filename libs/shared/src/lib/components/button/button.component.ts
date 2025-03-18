import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Search, ArrowRight, Check, X, ChevronDown, ChevronUp } from 'lucide-angular';

@Component({
  selector: 'lib-button',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() type: 'primary' | 'secondary' = 'primary';
  @Input() state: 'default' | 'disabled' = 'default';
  @Input() size: 'small' | 'medium' | 'large' = 'large';
  @Input() text = true;
  @Input() leftIcon?: keyof typeof this.icons;
  @Input() rightIcon?: keyof typeof this.icons;
  @Input() iconOnly = false;
  @Input() fullWidth = false;
  @Input() loading = false;
  @Input() buttonText = 'Click here';
  @Input() iconSize = 20;
  @Input() strokeWidth = 3;
  @Input() buttonType: 'submit' | 'button' = 'button';
  @Output() buttonClick = new EventEmitter<Event>();

  public icons = {
    search: Search,
    arrowRight: ArrowRight,
    check: Check,
    x: X,
    chevronDown: ChevronDown,
    chevronUp: ChevronUp,
  };

  handleClick(event: Event) {
    if (this.state !== 'disabled') {
      this.buttonClick.emit(event);
    }
  }
}
