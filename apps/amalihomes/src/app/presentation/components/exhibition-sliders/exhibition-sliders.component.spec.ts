import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExhibitionSlidersComponent } from './exhibition-sliders.component';

describe('ExhibitionSlidersComponent', () => {
  let component: ExhibitionSlidersComponent;
  let fixture: ComponentFixture<ExhibitionSlidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExhibitionSlidersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExhibitionSlidersComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('products', []);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
