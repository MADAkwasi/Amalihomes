import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, effect, input, signal } from '@angular/core';
import { ArrowUpComponent } from '../../svg-icons/arrow-up/arrow-up.component';
import { TextDirective } from '@amalihomes/shared';
import { FaqsAccordionData } from 'apps/amalihomes/src/app/logic/data/constants/faqs';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule, ArrowUpComponent, TextDirective],
  templateUrl: './accordion.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionComponent {
  public readonly accordionData = input.required<FaqsAccordionData[] | string | undefined>();
  protected readonly openIndices = signal<Set<number>>(new Set());
  protected readonly safeAccordionData = computed(() => this.accordionData() as FaqsAccordionData[]);

  constructor() {
    effect(() => {
      if (this.accordionData()) this.openIndices.set(new Set());
    });
  }

  protected onToggle(index: number) {
    const current = new Set(this.openIndices());

    if (current.has(index)) current.delete(index);
    else current.add(index);

    this.openIndices.set(current);
  }

  protected isOpen(index: number): boolean {
    return this.openIndices().has(index);
  }
}
