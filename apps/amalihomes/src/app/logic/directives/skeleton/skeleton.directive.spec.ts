import { SkeletonDirective } from './skeleton.directive';
import { ElementRef, Renderer2 } from '@angular/core';

describe('SkeletonDirective', () => {
  let directive: SkeletonDirective;
  let mockElementRef: ElementRef;
  let mockRenderer: Renderer2;

  beforeEach(() => {
    mockElementRef = {
      nativeElement: document.createElement('div'),
    } as ElementRef;

    mockRenderer = {
      addClass: jest.fn(),
    } as unknown as Renderer2;

    directive = new SkeletonDirective(mockElementRef, mockRenderer);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should add animate-skeleton class to element', () => {
    expect(mockRenderer.addClass).toHaveBeenCalledWith(mockElementRef.nativeElement, 'animate-skeleton');
  });

  it('should add bg-muted class to element', () => {
    expect(mockRenderer.addClass).toHaveBeenCalledWith(mockElementRef.nativeElement, 'bg-muted');
  });

  it('should add both required classes', () => {
    expect(mockRenderer.addClass).toHaveBeenCalledTimes(2);
  });
});
