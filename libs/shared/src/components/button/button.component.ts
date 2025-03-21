import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() type: 'primary' | 'secondary' | 'tetiary' = 'primary';
  @Input() state: 'default' | 'disabled' = 'default';
  @Input() size: 'small' | 'medium' | 'large' = 'large';
  @Input() buttonType: 'submit' | 'button' = 'button';
  @Output() buttonClick = new EventEmitter<Event>();
  @Input() buttonStyles = '';
  @Input({ required: true }) buttonRole!: string;

  handleClick(event: Event) {
    if (this.state !== 'disabled') {
      this.buttonClick.emit(event);
    }
  }
}
