import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MailComponent } from '../../../presentation/components/svg-icons/mail/mail.component';
import { PhoneComponent } from '../../../presentation/components/svg-icons/phone/phone.component';
import { TextDirective } from '../../directives/text/text.directive';

@Component({
  selector: 'lib-sales-rep',
  standalone: true,
  imports: [MailComponent, PhoneComponent, TextDirective],
  templateUrl: './sales-rep.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SaleRepComponent {}
