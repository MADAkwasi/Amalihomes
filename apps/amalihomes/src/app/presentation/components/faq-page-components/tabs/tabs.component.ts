import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { AccordionComponent } from '../accordion/accordion.component';
import { Store } from '@ngrx/store';
import { selectSection } from 'apps/amalihomes/src/app/logic/stores/selectors/storyblok.selectors';
import { ActivatedRoute } from '@angular/router';
import { FaqEnquiryTabTypes } from 'apps/amalihomes/src/app/types/storyblok';

const AvailableFaqTabs: FaqEnquiryTabTypes[] = ['orders', 'returns', 'shipping', 'support'];

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule, AccordionComponent],
  templateUrl: './tabs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent {
  private activatedRoute = inject(ActivatedRoute);
  private readonly store = inject(Store);
  protected readonly tabsContent = this.store.selectSignal(selectSection('navigationTabs'));
  protected readonly tabsData = computed(() => this.tabsContent()?.tabs);
  protected readonly activeTab = signal<FaqEnquiryTabTypes>('orders');
  protected readonly activeTabData = computed(() =>
    this.tabsContent()?.tabs?.find((tab) => tab.enquiryType === this.activeTab()),
  );

  constructor() {
    const fragment = this.activatedRoute.snapshot.fragment;
    if (fragment) {
      const fragmentTab = fragment.split('-').pop() as FaqEnquiryTabTypes;
      if (AvailableFaqTabs.includes(fragmentTab)) {
        this.activeTab.set(fragmentTab);
      }
    }
  }
}
