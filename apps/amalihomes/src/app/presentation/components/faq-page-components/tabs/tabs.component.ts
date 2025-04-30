import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { AccordionComponent } from '../accordion/accordion.component';
import { Store } from '@ngrx/store';
import { selectSection } from 'apps/amalihomes/src/app/logic/stores/selectors/storyblok.selectors';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule, AccordionComponent],
  templateUrl: './tabs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent {
  private readonly store = inject(Store);
  protected readonly tabsContent = this.store.selectSignal(selectSection('navigationTabs'));
  protected readonly tabsData = computed(() => this.tabsContent()?.tabs);
  protected readonly activeTab = signal(0);

  protected onSelectTab(index: number) {
    this.activeTab.set(index);
  }
}
