import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FooterStoryblok } from '../../../types';

@Component({
  selector: 'app-hyperlinks',
  imports: [CommonModule, RouterLink],
  templateUrl: './hyperlinks.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HyperlinksComponent {
  public readonly category = input.required<string>();
  public readonly links = input.required<FooterStoryblok['linksSection']>();
}
