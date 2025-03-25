import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeMoneyBagIconComponent } from './home-money-bag-icon.component';

describe('HomeMoneyBagIconComponent', () => {
  let component: HomeMoneyBagIconComponent;
  let fixture: ComponentFixture<HomeMoneyBagIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeMoneyBagIconComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeMoneyBagIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
