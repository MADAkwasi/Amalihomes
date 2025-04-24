import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-mail-icon',
  standalone: true,
  templateUrl: './mail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MailComponent {}
