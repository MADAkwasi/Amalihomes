import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabGroupComponent } from './tab-group.component';
import { By } from '@angular/platform-browser';
import { TabButtonComponent } from '../tab-button/tab-button.component';

describe('TabGroupComponent', () => {
  let component: TabGroupComponent;
  let fixture: ComponentFixture<TabGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabGroupComponent, TabButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TabGroupComponent);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('tabs', [
      { label: 'Africa', id: 'africa' },
      { label: 'Europe', id: 'europe' },
      { label: 'North America', id: 'north-america' },
      { label: 'South America', id: 'south-america' },
    ]);
    fixture.componentRef.setInput('selectedTabIdInput', 'europe');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render all tabs', () => {
    const tabButtons = fixture.debugElement.queryAll(By.directive(TabButtonComponent));
    expect(tabButtons.length).toBe(4);
  });

  it('should mark the correct tab as active', () => {
    const tabComponents = fixture.debugElement
      .queryAll(By.directive(TabButtonComponent))
      .map((debugEl) => debugEl.componentInstance as TabButtonComponent);

    expect(tabComponents[0].isActive()).toBe(false);
    expect(tabComponents[1].isActive()).toBe(true);
    expect(tabComponents[2].isActive()).toBe(false);
    expect(tabComponents[3].isActive()).toBe(false);
  });

  it('should change selected tab when a tab is clicked', () => {
    const tabButtons = fixture.debugElement.queryAll(By.directive(TabButtonComponent));
    const northAmericaTab = tabButtons[2].componentInstance as TabButtonComponent;
    northAmericaTab.selected.emit('north-america');

    expect(component.selectedTabId()).toBe('north-america');
    component.tabChange.subscribe((selectedTabId: string | null) => {
      expect(selectedTabId).toBe('north-america');
    });
  });

  it('should support disabled tabs', () => {
    fixture.componentRef.setInput('tabs', [
      { label: 'Africa', id: 'africa' },
      { label: 'Europe', id: 'europe', disabled: true },
      { label: 'North America', id: 'north-america' },
      { label: 'South America', id: 'south-america' },
    ]);
    fixture.detectChanges();

    const tabComponents = fixture.debugElement
      .queryAll(By.directive(TabButtonComponent))
      .map((debugEl) => debugEl.componentInstance as TabButtonComponent);
    expect(tabComponents[1].disabled()).toBe(true);
  });
});
