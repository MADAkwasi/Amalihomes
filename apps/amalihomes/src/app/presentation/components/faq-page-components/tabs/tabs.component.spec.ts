import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabsComponent } from './tabs.component';
import { By } from '@angular/platform-browser';
import { FaqsData } from 'apps/amalihomes/src/app/logic/data/constants/faqs';

describe('TabsComponent', () => {
  let fixture: ComponentFixture<TabsComponent>;
  let component: TabsComponent;

  const mockTabs: FaqsData[] = [
    {
      title: 'Order & Payments',
      content: [],
    },
    {
      title: 'Shipping & Delivery',
      content: [],
    },
    {
      title: 'Returns & Funds',
      content: [],
    },
    {
      title: 'Account & Support',
      content: [],
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TabsComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('tabs', mockTabs);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display all tab titles', () => {
    const tabButtons = fixture.debugElement.queryAll(By.css('button'));
    expect(tabButtons.length).toBe(mockTabs.length);

    const titles = tabButtons.map((btn) => btn.nativeElement.textContent.trim());
    const expectedTitles = mockTabs.map((tab) => tab.title);
    expect(titles).toEqual(expectedTitles);
  });

  it('should highlight the first tab by default', () => {
    const firstTab = fixture.debugElement.queryAll(By.css('button'))[0];
    expect(firstTab.nativeElement.classList).toContain('active-tab');
  });

  it('should change active tab when a different tab is clicked', () => {
    const secondTab = fixture.debugElement.queryAll(By.css('button'))[1];
    secondTab.nativeElement.click();
    fixture.detectChanges();

    const updatedActive = fixture.debugElement.queryAll(By.css('button'))[1];
    expect(updatedActive.nativeElement.classList).toContain('active-tab');
  });
});
