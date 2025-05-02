import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { MailComponent } from '../../../presentation/components/svg-icons/mail/mail.component';
import { PhoneComponent } from '../../../presentation/components/svg-icons/phone/phone.component';
import { TextDirective } from '../../directives/text/text.directive';
import { Store } from '@ngrx/store';
import { selectLocale, selectSection } from '../../../logic/stores/selectors/storyblok.selectors';

@Component({
  selector: 'lib-sales-rep',
  standalone: true,
  imports: [MailComponent, PhoneComponent, TextDirective],
  templateUrl: './sales-rep.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SaleRepComponent {
  private readonly store = inject(Store);
  private readonly selectedLocale = this.store.selectSignal(selectLocale);
  private readonly salesRep = this.store.selectSignal(selectSection('contact'));
  protected readonly curLocaleSalesRep = computed(() =>
    this.salesRep()?.salesRep?.find(({ country }) => this.selectedLocale()?.country === country),
  );
}
