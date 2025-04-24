/* eslint-disable no-empty-function */
import { Directive, ElementRef, input, OnInit, Renderer2 } from '@angular/core';

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
  public readonly textType = input<TextType>('text-normal');

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.applyStyles();
  }

  private applyStyles() {
    const classes = this.getClassList(this.textType());
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
          'md:leading-[4rem]',
          'xl:leading-[3.5rem]',
          'leading-[2rem]',
        ];
      case 'heading2':
        return [
          'font-semibold',
          'lg:text-[2.5rem]',
          'lg:leading-[3rem]',
          'text-black',
          'text-[1.5rem]',
          'leading-[2rem]',
        ];
      case 'heading3':
        return ['leading-[1.75rem]', 'font-semibold', 'text-xl', 'text-black'];
      case 'heading4':
        return ['font-semibold', 'text-lg', 'text-black'];
      case 'heading5':
        return ['font-semibold', 'text-base', 'text-black'];
      case 'heading6':
        return ['font-semibold', 'text-sm', 'text-black'];
      case 'text-small':
        return ['text-xsm', '2xl:text-sm', 'text-[#5d5d5d]'];
      case 'text-medium':
        return ['text-lg', '2xl:text-xl', 'text-[#5d5d5d]', 'md:leading-[1.62rem]', 'leading-[1.5rem]'];
      case 'text-large':
        return ['text-xl', '2xl:text-2xl', 'text-[#5d5d5d]'];
      case 'text-normal':
      default:
        return ['text-base', 'lg:text-sm', '2xl:text-base', 'leading-[1.5rem]', 'text-[#5d5d5d]'];
    }
  }
}
