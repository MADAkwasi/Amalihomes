import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  type = input<'primary' | 'secondary' | 'tetiary'>('primary');
  state = input<'default' | 'disabled'>('default');
  title = input('');
  buttonType = input<'submit' | 'button'>('button');
  buttonStyles = input('');
  buttonIdentifier = input.required<string>();

  buttonClick = output<Event>();

  handleClick(event: Event) {
    if (this.state() !== 'disabled') {
      this.buttonClick.emit(event);
    }
  }
}
