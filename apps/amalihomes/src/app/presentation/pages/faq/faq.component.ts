import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { HeroComponent } from '../../../shared-ui/components/hero/hero.component';

@Component({
  selector: 'app-faq',
  imports: [CommonModule, TabsComponent, HeroComponent],
  templateUrl: './faq.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqComponent {}
