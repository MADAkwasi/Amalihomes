import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from '@amalihomes/shared';
import { ResponsiveHeadingComponent } from '../responsive-heading/responsive-heading.component';
import { teamMembers } from 'apps/amalihomes/src/app/logic/data/constants/about';

@Component({
  selector: 'app-leadership',
  standalone: true,
  imports: [CommonModule, ImageComponent, ResponsiveHeadingComponent],
  templateUrl: './leadership.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeadershipComponent {
  public leadershipList = input(teamMembers.data);
  public title = input(teamMembers.title);
  public description = input(teamMembers.description);
}
