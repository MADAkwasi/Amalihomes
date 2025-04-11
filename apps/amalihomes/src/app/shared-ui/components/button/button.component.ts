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
  public readonly type = input<'primary' | 'secondary' | 'tetiary'>('primary');
  public readonly state = input<'default' | 'disabled'>('default');
  public readonly title = input('');
  public readonly buttonType = input<'submit' | 'button'>('button');
  public readonly buttonStyles = input('');
  public readonly buttonIdentifier = input.required<string>();

  public buttonClick = output<Event>();

  protected handleClick(event: Event) {
    if (this.state() !== 'disabled') {
      this.buttonClick.emit(event);
    }
  }
}
