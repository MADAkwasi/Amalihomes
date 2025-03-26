import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeTruckIconComponent } from './home-truck-icon.component';

describe('HomeTruckIconComponent', () => {
  let component: HomeTruckIconComponent;
  let fixture: ComponentFixture<HomeTruckIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeTruckIconComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeTruckIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
