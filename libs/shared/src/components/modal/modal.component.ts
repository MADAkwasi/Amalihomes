import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  position = input<'left' | 'right' | 'top' | 'bottom'>('top');
  modalClass = input('');
  isOpen = false;
  hasModalBackdrop = input(false);

  toggleModal() {
    this.isOpen = !this.isOpen;
  }

  closeModal() {
    this.isOpen = false;
  }
}
