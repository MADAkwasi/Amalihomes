/* eslint-disable no-empty-function */
import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

type TextType =
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'heading4'
  | 'heading5'
  | 'heading6'
  | 'text-small'
  | 'text-medium'
  | 'text-large'
  | 'text-normal';

@Directive({
  selector: '[libText]',
})
export class TextDirective implements OnInit {
  @Input() textType: TextType = 'text-normal';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.applyStyles();
  }

  private applyStyles() {
    const classes = this.getClassList(this.textType);
    classes.forEach((className) => {
      this.renderer.addClass(this.elementRef.nativeElement, className);
    });
  }

  private getClassList(textType: TextType): string[] {
    switch (textType) {
      case 'heading1':
        return [
          'font-bold',
          'text-[1.5rem]',
          'md:text-[3.5rem]',
          'xl:text-[3rem]',
          'text-black',
          'md:leading-[4.18rem]',
          'leading-[2rem]',
        ];
      case 'heading2':
        return ['font-bold', 'text-[2.5rem]', 'leading-[3rem]', 'text-black'];
      case 'heading3':
        return ['leading-[1.75rem]', 'font-bold', 'text-xl', 'text-black'];
      case 'heading4':
        return ['font-bold', 'text-lg', 'text-black'];
      case 'heading5':
        return ['font-bold', 'text-base', 'text-black'];
      case 'heading6':
        return ['font-bold', 'text-sm', 'text-black'];
      case 'text-small':
        return ['text-sm', 'text-[#5d5d5d]'];
      case 'text-medium':
        return ['text-lg', 'text-[#5d5d5d]', 'md:leading-[1.62rem]', 'leading-[1.5rem]'];
      case 'text-large':
        return ['text-xl', 'text-[#5d5d5d]'];
      case 'text-normal':
      default:
        return ['text-base', 'leading-[1.5rem]', 'text-[#5d5d5d]'];
    }
  }
}
