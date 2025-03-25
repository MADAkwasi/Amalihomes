import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HyperlinksComponent } from './hyperlinks.component';

describe('HyperlinksComponent', () => {
  let component: HyperlinksComponent;
  let fixture: ComponentFixture<HyperlinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HyperlinksComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HyperlinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
