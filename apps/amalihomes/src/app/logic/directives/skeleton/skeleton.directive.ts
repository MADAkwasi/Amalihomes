import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSkeleton]',
})
export class SkeletonDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.renderer.addClass(this.elementRef.nativeElement, 'animate-skeleton');
    this.renderer.addClass(this.elementRef.nativeElement, 'bg-muted');
  }
}
