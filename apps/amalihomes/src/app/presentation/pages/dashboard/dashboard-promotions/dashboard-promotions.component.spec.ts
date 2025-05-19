import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardPromotionsComponent } from './dashboard-promotions.component';

describe('DashboardPromotionsComponent', () => {
  let component: DashboardPromotionsComponent;
  let fixture: ComponentFixture<DashboardPromotionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardPromotionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardPromotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
