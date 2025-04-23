import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from '../../components/faq-page-components/tabs/tabs.component';
import { HeroComponent } from '../../../shared-ui/components/hero/hero.component';
import { faqsData } from '../../../logic/data/constants/faqs';

@Component({
  selector: 'app-faq',
  imports: [CommonModule, TabsComponent, HeroComponent],
  templateUrl: './faq.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqComponent {
  protected readonly tabsData = signal(faqsData);
}
