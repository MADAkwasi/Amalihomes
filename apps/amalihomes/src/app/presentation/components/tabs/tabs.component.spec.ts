import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabsComponent } from './tabs.component';
import { By } from '@angular/platform-browser';

describe('TabsComponent', () => {
  let fixture: ComponentFixture<TabsComponent>;
  let component: TabsComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display all tab titles', () => {
    const tabButtons = fixture.debugElement.queryAll(By.css('button'));
    expect(tabButtons.length).toBe(4);

    const titles = tabButtons.map((btn) => btn.nativeElement.textContent.trim());
    expect(titles).toEqual(['Order & Payments', 'Shipping & Delivery', 'Returns & Funds', 'Account & Support']);
  });

  it('should highlight the first tab by default', () => {
    const firstTab = fixture.debugElement.queryAll(By.css('button'))[0];
    expect(firstTab.nativeElement.classList).toContain('active-tab');

    const content = fixture.debugElement.query(By.css('.my-6'));
    expect(content.nativeElement.textContent.trim()).toBe('Content 1');
  });

  it('should change active tab and content when a tab is clicked', () => {
    const secondTab = fixture.debugElement.queryAll(By.css('button'))[1];
    secondTab.nativeElement.click();
    fixture.detectChanges();

    const updatedActive = fixture.debugElement.queryAll(By.css('button'))[1];
    expect(updatedActive.nativeElement.classList).toContain('active-tab');

    const content = fixture.debugElement.query(By.css('.my-6'));
    expect(content.nativeElement.textContent.trim()).toBe('Content 2');
  });

  it('should render correct content for each tab when clicked', () => {
    const tabButtons = fixture.debugElement.queryAll(By.css('button'));

    tabButtons.forEach((btn, index) => {
      btn.nativeElement.click();
      fixture.detectChanges();

      const content = fixture.debugElement.query(By.css('.my-6'));
      expect(content.nativeElement.textContent.trim()).toBe(`Content ${index + 1}`);
    });
  });
});
