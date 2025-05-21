import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ChevronRight } from 'lucide-angular';

@Component({
  selector: 'app-breadcrumb',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './breadcrumb.component.html',
})
export class BreadcrumbComponent {
  public route = input('Profile');
  protected chevronRight = ChevronRight;
}
