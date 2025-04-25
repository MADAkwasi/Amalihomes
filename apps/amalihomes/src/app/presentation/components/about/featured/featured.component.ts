import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsiveHeadingComponent } from '../responsive-heading/responsive-heading.component';
import { ValuePropItemComponent } from '../../value-prop-item/value-prop-item.component';
import { ImageComponent } from '@amalihomes/shared';
import { featuredData } from 'apps/amalihomes/src/app/logic/data/constants/about';

@Component({
  selector: 'app-featured',
  standalone: true,
  imports: [CommonModule, ResponsiveHeadingComponent, ValuePropItemComponent, ImageComponent],
  templateUrl: './featured.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturedComponent {
  public data = input(featuredData.data);
  public title = input(featuredData.title);
  public description = input(featuredData.description);
  public image = input(featuredData.image);
}
