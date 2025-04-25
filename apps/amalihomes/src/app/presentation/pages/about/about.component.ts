import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from '../../components/about/statistics/statistics.component';
import { FeaturedComponent } from '../../components/about/featured/featured.component';
import { LocationMapComponent } from '../../components/about/location-map/location-map.component';
import { LeadershipComponent } from '../../components/about/leadership/leadership.component';
import { ShowroomGridComponent } from '../../components/about/showroom-grid/showroom-grid.component';

@Component({
  selector: 'app-about',
  imports: [
    CommonModule,
    StatisticsComponent,
    FeaturedComponent,
    LocationMapComponent,
    LeadershipComponent,
    ShowroomGridComponent,
  ],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  public location = 'Amalitech, Ghana';
}
