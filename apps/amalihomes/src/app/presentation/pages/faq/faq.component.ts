import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from '../../components/tabs/tabs.component';

@Component({
  selector: 'app-faq',
  imports: [CommonModule, TabsComponent],
  templateUrl: './faq.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqComponent {}
