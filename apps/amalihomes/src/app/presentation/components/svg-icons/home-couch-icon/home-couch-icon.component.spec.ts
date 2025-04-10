import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeCouchIconComponent } from './home-couch-icon.component';

describe('HomeCouchIconComponent', () => {
  let component: HomeCouchIconComponent;
  let fixture: ComponentFixture<HomeCouchIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCouchIconComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeCouchIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
