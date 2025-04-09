import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImageComponent } from './image.component';
import { By } from '@angular/platform-browser';

describe('ImageComponent', () => {
  let component: ImageComponent;
  let fixture: ComponentFixture<ImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the image with the correct src and alt', () => {
    fixture.componentRef.setInput('src', 'https://example.com/image.jpg');
    fixture.componentRef.setInput('alt', 'Test Image');
    fixture.detectChanges();

    const imgElement = fixture.debugElement.query(By.css('img'));
    expect(imgElement.nativeElement.src).toBe('https://example.com/image.jpg');
    expect(imgElement.nativeElement.alt).toBe('Test Image');
  });

  it('should render the image with the correct class', () => {
    fixture.componentRef.setInput('class', 'test-class');
    fixture.detectChanges();

    const imgElement = fixture.debugElement.query(By.css('img'));
    expect(imgElement.nativeElement.classList).toContain('test-class');
  });
});
