import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@amalihomes/shared';

@Component({
  selector: 'app-search-field',
  imports: [CommonModule, ButtonComponent, CommonModule],
  templateUrl: './search-field.component.html',
})
export class SearchFieldComponent {
  @Input() isOpen!: boolean;
}
