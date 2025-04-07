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

    if (this.isOpen) document.body.style.overflowY = 'hidden';
    else document.body.style.overflowY = '';
  }

  closeModal() {
    this.isOpen = false;
    document.body.style.overflowY = '';
  }
}
