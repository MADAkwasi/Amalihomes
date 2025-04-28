import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowroomGridComponent } from './showroom-grid.component';
import { ShowroomsData } from 'apps/amalihomes/src/app/logic/interfaces/about';
import { ResponsiveHeadingComponent } from '../responsive-heading/responsive-heading.component';
import { TabItem } from 'apps/amalihomes/src/app/shared-ui/components/tab-group/tab-group.component';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab-group',
  template: `
    <div class="mock-tab-group">
      <button
        *ngFor="let tab of tabs"
        [attr.data-tab-id]="tab.id"
        [class.active]="selectedTabIdInput === tab.id"
        (click)="tabChange.emit(tab.id)"
      >
        {{ tab.label }}
      </button>
    </div>
  `,
})
class MockTabGroupComponent {
  tabs: TabItem[] = [];
  selectedTabIdInput: string | null = null;
  tabChange = { emit: jest.fn() };
}

describe('ShowroomGridComponent', () => {
  let component: ShowroomGridComponent;
  let fixture: ComponentFixture<ShowroomGridComponent>;

  const mockShowroomsData: ShowroomsData = {
    Africa: [],
    Europe: [
      {
        id: 'germany',
        name: 'Germany',
        image: 'https://i.postimg.cc/pTmpqrvN/image.png',
      },
      {
        id: 'belgium',
        name: 'Belgium',
        image: 'https://i.postimg.cc/RCnWtWGK/image.png',
      },
    ],
    'North America': [],
    'South America': [],
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowroomGridComponent, MockTabGroupComponent, ResponsiveHeadingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShowroomGridComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('showroomsData', mockShowroomsData);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate region tabs correctly', () => {
    const tabs = component.regionTabs();
    expect(tabs).toEqual([
      { id: 'Africa', label: 'Africa', disabled: false },
      { id: 'Europe', label: 'Europe', disabled: false },
      { id: 'North America', label: 'North America', disabled: false },
      { id: 'South America', label: 'South America', disabled: false },
    ]);
  });

  it('should initialize with the provided region', () => {
    fixture.componentRef.setInput('initialRegion', 'Europe');
    component.ngOnInit();
    expect(component.selectedRegion()).toBe('Europe');
  });

  it('should display "No showrooms" message when region has no showrooms', () => {
    component.onRegionChange('Africa');
    fixture.detectChanges();

    const noShowroomsMessage = fixture.debugElement.query(By.css('.col-span-full'));
    expect(noShowroomsMessage).toBeTruthy();
    expect(noShowroomsMessage.nativeElement.textContent.trim()).toContain('No showrooms available');
  });

  it('should emit showroomSelected event when showroom is clicked', () => {
    component.onRegionChange('Europe');
    fixture.detectChanges();

    const spyOnShowroomSelected = jest.spyOn(component.showroomSelected, 'emit');
    const showroomItems = fixture.debugElement.queryAll(By.css('.aspect-\\[4\\/5\\]')).map((el) => el.parent);

    if (showroomItems[0]?.nativeElement) {
      showroomItems[0].nativeElement.click();
    }

    expect(spyOnShowroomSelected).toHaveBeenCalledWith(mockShowroomsData['Europe'][0]);
  });

  it('should emit regionChange event when region is changed', () => {
    const spyOnRegionChange = jest.spyOn(component.regionChange, 'emit');
    component.onRegionChange('North America');

    expect(spyOnRegionChange).toHaveBeenCalledWith('North America');
    expect(component.selectedRegion()).toBe('North America');
  });

  it('should compute current showrooms correctly when region changes', () => {
    component.onRegionChange('Europe');
    expect(component.currentShowrooms().length).toBe(2);

    component.onRegionChange('Africa');
    expect(component.currentShowrooms().length).toBe(0);
  });

  it('should handle null or invalid selectedRegion gracefully', () => {
    component.onRegionChange(null);
    expect(component.currentShowrooms().length).toBe(0);
  });
});
