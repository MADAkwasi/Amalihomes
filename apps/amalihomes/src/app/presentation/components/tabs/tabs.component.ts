import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-tabs',
  imports: [CommonModule],
  templateUrl: './tabs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent {
  protected readonly tabsSignal = signal(tabs);
  protected readonly activeTab = signal(0);

  protected onSelectTab(index: number) {
    this.activeTab.set(index);
  }
}

const tabs = [
  { title: 'Order & Payments', content: 'Content 1' },
  { title: 'Shipping & Delivery', content: 'Content 2' },
  { title: 'Returns & Funds', content: 'Content 3' },
  { title: 'Account & Support', content: 'Content 4' },
];
