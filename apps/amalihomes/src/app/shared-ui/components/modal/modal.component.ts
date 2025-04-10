import { Component, input, ChangeDetectionStrategy, ChangeDetectorRef, inject } from '@angular/core';
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
  public cdRef = inject(ChangeDetectorRef);

  public toggleModal() {
    this.isOpen = !this.isOpen;

    if (this.isOpen) document.body.style.overflowY = 'hidden';
    else document.body.style.overflowY = '';
    this.cdRef.detectChanges();
  }

  public closeModal() {
    this.isOpen = false;
    document.body.style.overflowY = '';
    this.cdRef.detectChanges();
  }
}
