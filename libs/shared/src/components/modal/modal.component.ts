import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent {
  public readonly position = input<'left' | 'right' | 'top' | 'bottom'>('top');
  public readonly modalClass = input('');
  public isOpen = false;
  public readonly hasModalBackdrop = input(false);

  public toggleModal() {
    this.isOpen = !this.isOpen;
  }

  public closeModal() {
    this.isOpen = false;
  }
}
