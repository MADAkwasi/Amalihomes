import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InformationCircleIconComponent } from './information-circle-icon.component';

describe('InformationCircleIconComponent', () => {
  let component: InformationCircleIconComponent;
  let fixture: ComponentFixture<InformationCircleIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformationCircleIconComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InformationCircleIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
