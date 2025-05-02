import { Component, input, signal, output, computed, ChangeDetectionStrategy, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabButtonComponent } from '../tab-button/tab-button.component';
import { TabItem } from '../../../types/storyblok';

@Component({
  selector: 'app-tab-group',
  standalone: true,
  imports: [CommonModule, TabButtonComponent],
  templateUrl: './tab-group.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabGroupComponent {
  public tabs = input<TabItem[]>([]);
  public selectedTabIdInput = input<string>();

  private selectedTabIdInternal = signal(this.selectedTabIdInput());
  public selectedTabId = computed(() => this.selectedTabIdInternal());

  public tabChange = output<string | null>();

  onTabSelected(tabId: string): void {
    this.selectedTabIdInternal.set(tabId);
    this.tabChange.emit(tabId);
  }

  constructor() {
    effect(() => {
      if (this.selectedTabIdInput()) {
        this.selectedTabIdInternal.set(this.selectedTabIdInput());
      }
    });
  }
}
