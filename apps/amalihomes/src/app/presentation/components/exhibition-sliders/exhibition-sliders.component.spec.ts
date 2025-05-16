import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExhibitionSlidersComponent } from './exhibition-sliders.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('ExhibitionSlidersComponent', () => {
  let component: ExhibitionSlidersComponent;
  let fixture: ComponentFixture<ExhibitionSlidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExhibitionSlidersComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({
              get: (key: string) => {
                if (key === 'id') return 'some-test-id';
                return null;
              },
            }),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ExhibitionSlidersComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('products', []);
    fixture.componentRef.setInput('url', '');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
