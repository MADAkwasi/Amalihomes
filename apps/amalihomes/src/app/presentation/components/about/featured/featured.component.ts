import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsiveHeadingComponent } from '../responsive-heading/responsive-heading.component';
import { ValuePropItemComponent } from '../../value-prop-item/value-prop-item.component';
import { ValuePropIconName } from '../../value-prop-icon/constants';
import { ImageComponent } from '@amalihomes/shared';

@Component({
  selector: 'app-featured',
  standalone: true,
  imports: [CommonModule, ResponsiveHeadingComponent, ValuePropItemComponent, ImageComponent],
  templateUrl: './featured.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturedComponent {
  // this is just a mocked data, in the future we will get this data from storyblok
  data = [
    {
      id: 1,
      icon: ValuePropIconName.Medal,
      title: 'Award Winning designs',
      description: 'Experience innovative and stylish furniture, recognized for excellence.',
    },
    {
      id: 2,
      icon: ValuePropIconName.Badge,
      title: '10-year warranty',
      description: 'Enjoy peace of mind with our durable furniture, backed by a 10-year warranty.',
    },
    {
      id: 3,
      icon: ValuePropIconName.StarTropy,
      title: 'Sustainable materials',
      description: 'Designed for comfort and durability, our furniture is superior above all',
    },
    {
      id: 4,
      icon: ValuePropIconName.Recycle,
      title: 'Quality furniture',
      description: 'Eco-friendly furniture made with responsibly sourced, high-quality materials',
    },
  ];
}
