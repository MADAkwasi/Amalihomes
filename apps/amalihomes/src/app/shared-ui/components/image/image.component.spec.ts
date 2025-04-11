import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImageComponent } from './image.component';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
  template: `<lib-image [src]="src" [alt]="alt" [width]="width" [height]="height" />`,
  standalone: true,
  imports: [ImageComponent],
})
class TestHostComponent {
  src = 'valid-image.jpg';
  alt = 'Test image';
  width = 300;
  height = 500;
}

describe('ImageComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let hostComponent: TestHostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    hostComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should initialize imgSrc with the correct src input', () => {
    const imageDebugEl = fixture.debugElement.query(By.directive(ImageComponent));
    const imageComponent = imageDebugEl.componentInstance as ImageComponent;
    expect(imageComponent.imgSrc).toBe('valid-image.jpg');
  });

  it('should update imgSrc to fallback on error', () => {
    const imageDebugEl = fixture.debugElement.query(By.css('img'));
    const imgEl: HTMLImageElement = imageDebugEl.nativeElement;
    imgEl.dispatchEvent(new Event('error'));
    fixture.detectChanges();

    const imageComponent = fixture.debugElement.query(By.directive(ImageComponent)).componentInstance;
    expect(imageComponent.imgSrc).toBe('images/image-placeholder.png');
  });
});
