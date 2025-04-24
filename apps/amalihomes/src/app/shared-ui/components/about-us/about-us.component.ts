import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SaleRepComponent } from '../sales-rep/sales-rep.component';
import { TextDirective } from '../../directives/text/text.directive';

@Component({
  selector: 'lib-about-us',
  standalone: true,
  imports: [CommonModule, SaleRepComponent, TextDirective],
  templateUrl: './about-us.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutUsComponent {
  public readonly position = input<'form-first' | 'form-last'>('form-last');
  public readonly bgImg = input<string>();
  public readonly bgColor = input<string>();
}
