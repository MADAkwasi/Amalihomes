import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@amalihomes/shared';
import { LucideAngularModule, Search } from 'lucide-angular';

@Component({
  selector: 'app-search-field',
  imports: [CommonModule, ButtonComponent, CommonModule, LucideAngularModule],
  templateUrl: './search-field.component.html',
})
export class SearchFieldComponent {
  @Input() isOpen!: boolean;
  public icons = { Search };
}
