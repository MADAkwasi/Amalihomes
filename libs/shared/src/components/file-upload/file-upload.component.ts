import { Component, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-file-upload',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
})
export class FileUploadComponent {
  label = input('');
  id = input('');
  accept = input('image/*');

  fileName = signal('');
  previewUrl = signal<string | ArrayBuffer | null>(null);

  onFileSelected(event: Event) {
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
