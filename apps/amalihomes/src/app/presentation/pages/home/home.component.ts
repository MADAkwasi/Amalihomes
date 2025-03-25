import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeHeroSectionComponent } from '../../components/home-hero-section/home-hero-section.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HomeHeroSectionComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
