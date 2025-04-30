import { ChangeDetectionStrategy, Component, computed, input, output, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabGroupComponent, TabItem } from 'apps/amalihomes/src/app/shared-ui/components/tab-group/tab-group.component';
import { ResponsiveHeadingComponent } from '../responsive-heading/responsive-heading.component';
import { ImageComponent } from '@amalihomes/shared';
import { showroomsData } from 'apps/amalihomes/src/app/logic/data/constants/about';
import { ShowroomsData, Showroom } from 'apps/amalihomes/src/app/logic/interfaces/about';

@Component({
  selector: 'app-showroom-grid',
  standalone: true,
  imports: [CommonModule, TabGroupComponent, ResponsiveHeadingComponent, ImageComponent],
  templateUrl: './showroom-grid.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowroomGridComponent implements OnInit {
  public showroomsData = input<ShowroomsData>(showroomsData.data);
  public initialRegion = input<string | null>('Europe');
  public showroomsTitle = input<string>(showroomsData.title);
  public showroomsDescription = input<string>(showroomsData.description);
  public regionChange = output<string>();
  public showroomSelected = output<Showroom>();

  public regionTabs = computed<TabItem[]>(() => {
    return Object.keys(this.showroomsData()).map((region) => ({
      id: region,
      label: region,
      disabled: false,
    }));
  });

  public currentShowrooms = computed(() => {
    const data = this.showroomsData();
    const region = this.selectedRegion();
    return region && data[region] ? data[region] : [];
  });

  private selectedRegionInternal = signal<string | null>(null);
  public selectedRegion = computed(() => this.selectedRegionInternal());

  ngOnInit(): void {
    const initialRegion = this.initialRegion();
    const availableRegions = Object.keys(this.showroomsData());

    if (initialRegion && availableRegions.includes(initialRegion)) {
      this.selectedRegionInternal.set(initialRegion);
    } else if (availableRegions.length > 0) {
      this.selectedRegionInternal.set(availableRegions[0]);
    }
  }

  public onRegionChange(regionId: string | null): void {
    this.selectedRegionInternal.set(regionId);
    if (regionId) {
      this.regionChange.emit(regionId);
    }
  }

  public onShowroomClick(showroom: Showroom): void {
    this.showroomSelected.emit(showroom);
  }
}
