import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeHeroSectionComponent } from '../../components/home-hero-section/home-hero-section.component';
import { ValuePropositionComponent } from '../../components/value-proposition/value-proposition.component';
import { HomeFlashSaleComponent } from '../../components/home-flash-sale/home-flash-sale.component';
import { HomeCategorySectionComponent } from '../../components/home-category-section/home-category-section.component';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    HomeHeroSectionComponent,
    ValuePropositionComponent,
    HomeFlashSaleComponent,
    HomeCategorySectionComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
