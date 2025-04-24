import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MailComponent } from '../../../presentation/components/svg-icons/mail/mail.component';
import { PhoneComponent } from '../../../presentation/components/svg-icons/phone/phone.component';

@Component({
  selector: 'lib-sales-rep',
  standalone: true,
  imports: [MailComponent, PhoneComponent],
  templateUrl: './sales-rep.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SaleRepComponent {}
