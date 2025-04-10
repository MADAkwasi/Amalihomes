import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { StoryblokNavLink } from '../../../types/storyblok';

@Component({
  selector: 'app-hyperlinks',
  imports: [CommonModule, RouterLink],
  templateUrl: './hyperlinks.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HyperlinksComponent {
  public readonly category = input.required<string | undefined>();
  public readonly links = input.required<StoryblokNavLink[] | undefined>();
}
