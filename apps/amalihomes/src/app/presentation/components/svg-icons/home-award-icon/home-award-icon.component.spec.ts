import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeAwardIconComponent } from './home-award-icon.component';

describe('HomeAwardIconComponent', () => {
  let component: HomeAwardIconComponent;
  let fixture: ComponentFixture<HomeAwardIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeAwardIconComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeAwardIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
