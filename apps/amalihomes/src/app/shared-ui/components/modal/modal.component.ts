import { Component, input, ChangeDetectionStrategy, ChangeDetectorRef, inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';

@Component({
  selector: 'lib-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent {
  private readonly document = inject(DOCUMENT);
  public readonly position = input<'left' | 'right' | 'top' | 'bottom'>('top');
  public readonly modalClass = input('');
  public readonly hasModalBackdrop = input(false);
  protected isOpen = false;
  protected cdRef = inject(ChangeDetectorRef);

  protected toggleModal() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) this.document.body.style.overflowY = 'hidden';
    else this.document.body.style.overflowY = '';
    this.cdRef.detectChanges();
  }

  protected closeModal() {
    this.isOpen = false;
    this.document.body.style.overflowY = '';
    this.cdRef.detectChanges();
  }
}
