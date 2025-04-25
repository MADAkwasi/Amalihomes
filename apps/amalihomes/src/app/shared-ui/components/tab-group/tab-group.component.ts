import { Component, input, signal, computed, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabButtonComponent } from '../tab-button/tab-button.component';
import { EventEmitter, Output } from '@angular/core';

export interface TabItem {
  label: string;
  id: string;
  disabled?: boolean;
}

@Component({
  selector: 'app-tab-group',
  standalone: true,
  imports: [CommonModule, TabButtonComponent],
  templateUrl: './tab-group.component.html',
})
export class TabGroupComponent implements OnInit {
  public tabs = input<TabItem[]>([]);
  public selectedTabIdInput = input<string>();

  private selectedTabIdInternal = signal(this.selectedTabIdInput());
  public selectedTabId = computed(() => this.selectedTabIdInternal());

  @Output() public tabChange = new EventEmitter<string>();

  onTabSelected(tabId: string): void {
    this.selectedTabIdInternal.set(tabId);
    this.tabChange.emit(tabId);
  }

  ngOnInit(): void {
    if (this.selectedTabIdInput()) {
      this.selectedTabIdInternal.set(this.selectedTabIdInput());
    }
  }
}
