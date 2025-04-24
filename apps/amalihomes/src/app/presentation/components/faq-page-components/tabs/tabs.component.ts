import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { AccordionComponent } from '../accordion/accordion.component';
import { FaqsData } from 'apps/amalihomes/src/app/logic/data/constants/faqs';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule, AccordionComponent],
  templateUrl: './tabs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent {
  public readonly tabs = input.required<FaqsData[] | undefined>();
  protected readonly activeTab = signal(0);

  protected onSelectTab(index: number) {
    this.activeTab.set(index);
  }
}
