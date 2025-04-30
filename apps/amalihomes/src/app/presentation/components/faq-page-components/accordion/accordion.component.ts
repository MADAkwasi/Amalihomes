import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, effect, inject, input, signal } from '@angular/core';
import { ArrowUpComponent } from '../../svg-icons/arrow-up/arrow-up.component';
import { StoryblokAccordion } from 'apps/amalihomes/src/app/types/storyblok';
import { StoryblokService } from 'apps/amalihomes/src/app/logic/services/storyblok/storyblok.service';
import { ISbRichtext } from 'storyblok-js-client';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule, ArrowUpComponent],
  templateUrl: './accordion.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionComponent {
  private readonly storyblokService = inject(StoryblokService);
  public readonly accordionData = input.required<StoryblokAccordion[] | string | undefined>();
  protected readonly openIndices = signal<Set<number>>(new Set());
  protected readonly safeAccordionData = computed(() => this.accordionData() as StoryblokAccordion[]);

  constructor() {
    effect(() => {
      if (this.accordionData()) this.openIndices.set(new Set());
    });
  }

  protected resolveAnswer(answer: ISbRichtext): string {
    return this.storyblokService.resolveRichText(answer);
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
