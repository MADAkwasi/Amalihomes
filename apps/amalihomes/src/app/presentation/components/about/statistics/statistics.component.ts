import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsiveHeadingComponent } from '../responsive-heading/responsive-heading.component';
import { StatItem } from 'apps/amalihomes/src/app/logic/interfaces/about';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  imports: [CommonModule, ResponsiveHeadingComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatisticsComponent {
  // this is just a mocked data, in the future we will get this data from storyblok
  stats: StatItem[] = [
    { value: '30+', label: 'Years of Excellence' },
    { value: '15,000+', label: 'Clients' },
    { value: '12', label: 'Countries' },
    { value: '98%', label: 'Satisfied clients' },
  ];
}
