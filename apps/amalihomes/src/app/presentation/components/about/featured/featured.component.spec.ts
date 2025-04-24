import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeaturedComponent } from './featured.component';
import { ValuePropItemComponent } from '../../value-prop-item/value-prop-item.component';
import { ImageComponent } from '@amalihomes/shared';
import { By } from '@angular/platform-browser';

describe('FeaturedComponent', () => {
  let component: FeaturedComponent;
  let fixture: ComponentFixture<FeaturedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeaturedComponent);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('title', 'Test Title');
    fixture.componentRef.setInput('description', 'Test Description');
    fixture.componentRef.setInput('data', [{ title: 'Sample', description: 'Sample desc', icon: 'icon' }]);
    fixture.componentRef.setInput('image', 'https://example.com/image.jpg');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the title', () => {
    const heading = fixture.nativeElement.querySelector('h2');
    expect(heading?.textContent).toContain('Test Title');
  });

  it('should render the description', () => {
    const desc = fixture.nativeElement.textContent;
    expect(desc).toContain('Test Description');
  });

  it('should pass the image URL to the ImageComponent', () => {
    const imageComponent = fixture.debugElement.query(By.directive(ImageComponent));
    expect(imageComponent.componentInstance.src).toBe('https://example.com/image.jpg');
  });

  it('should render the correct number of ValuePropItems', () => {
    const items = fixture.debugElement.queryAll(By.directive(ValuePropItemComponent));
    expect(items.length).toBe(1);
  });
});
