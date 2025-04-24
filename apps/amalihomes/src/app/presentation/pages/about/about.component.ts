import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from '../../components/about/statistics/statistics.component';
import { FeaturedComponent } from '../../components/about/featured/featured.component';

@Component({
  selector: 'app-about',
  imports: [CommonModule, StatisticsComponent, FeaturedComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {}
