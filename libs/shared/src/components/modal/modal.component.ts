import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  @Input() position: 'left' | 'right' | 'top' | 'bottom' = 'top';
  @Input() modalClass = '';
  isOpen = false;
  @Input() hasModalBackdrop = false;

  toggleModal() {
    this.isOpen = !this.isOpen;
  }

  closeModal() {
    this.isOpen = false;
  }
}
