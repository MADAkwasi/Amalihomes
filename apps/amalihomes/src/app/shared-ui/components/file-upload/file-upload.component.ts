import { Component, input, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageIconComponent } from '../../ui/icons/image/image-icon.component';

@Component({
  selector: 'lib-file-upload',
  standalone: true,
  imports: [CommonModule, ImageIconComponent],
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileUploadComponent {
  public readonly label = input('');
  public readonly id = input('');
  public readonly accept = input('image/*');
  protected readonly fileName = signal('');
  protected readonly previewUrl = signal<string | ArrayBuffer | null>(null);

  protected onFileSelected(event: Event) {
    const inputValue = event.target as HTMLInputElement;
    if (inputValue.files && inputValue.files[0]) {
      const file = inputValue.files[0];
      this.fileName.set(file.name);

      if (file.type.match('image.*')) {
        const reader = new FileReader();
        reader.onload = () => {
          this.previewUrl.set(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        this.previewUrl.set(null);
      }
    }
  }
}
