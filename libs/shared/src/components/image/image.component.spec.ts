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
    component.src = 'https://example.com/image.jpg';
    component.alt = 'Test Image';
    fixture.detectChanges();

    const imgElement = fixture.debugElement.query(By.css('img'));
    expect(imgElement.nativeElement.src).toBe('https://example.com/image.jpg');
    expect(imgElement.nativeElement.alt).toBe('Test Image');
  });

  it('should apply landscape orientation', () => {
    component.orientation = 'landscape';
    fixture.detectChanges();

    const imgElement = fixture.debugElement.query(By.css('img'));
    expect(imgElement.nativeElement.classList).toContain('landscape');
  });

  it('should apply portrait orientation', () => {
    component.orientation = 'portrait';
    fixture.detectChanges();

    const imgElement = fixture.debugElement.query(By.css('img'));
    expect(imgElement.nativeElement.classList).toContain('portrait');
  });

  it('should set width and height', () => {
    component.width = 400;
    component.height = 300;
    fixture.detectChanges();

    const imgElement = fixture.debugElement.query(By.css('img'));
    expect(imgElement.nativeElement.style.width).toBe('400px');
    expect(imgElement.nativeElement.style.height).toBe('300px');
  });
});
