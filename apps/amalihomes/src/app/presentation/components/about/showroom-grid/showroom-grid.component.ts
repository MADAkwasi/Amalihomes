import { ChangeDetectionStrategy, Component, computed, input, output, effect, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabGroupComponent } from 'apps/amalihomes/src/app/shared-ui/components/tab-group/tab-group.component';
import { ResponsiveHeadingComponent } from '../responsive-heading/responsive-heading.component';
import { ImageComponent } from '@amalihomes/shared';
import { Store } from '@ngrx/store';
import { PLATFORM_ID } from '@angular/core';
import { selectSection } from 'apps/amalihomes/src/app/logic/stores/selectors/storyblok.selectors';
import { Showroom } from 'apps/amalihomes/src/app/types/storyblok';

@Component({
  selector: 'app-showroom-grid',
  standalone: true,
  imports: [CommonModule, TabGroupComponent, ResponsiveHeadingComponent, ImageComponent],
  templateUrl: './showroom-grid.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowroomGridComponent {
  private readonly store = inject(Store);
  private readonly platformId = inject(PLATFORM_ID);
  public readonly data = this.store.selectSignal(selectSection('show_room'));
  public initialRegion = input<string | null>('Europe');
  public regionChange = output<string>();
  public showroomSelected = output<Showroom>();

  public showroomsData = computed(() => {
    const data = this.data();
    if (!data?.regionTabs) return [];

    return data.regionTabs.map((region) => ({
      regionId: region._uid,
      regionName: region.tabName,
      showrooms: region.showroomItem.map((showroom) => ({
        id: showroom._uid,
        name: showroom.countryName,
        image: showroom.image,
      })),
    }));
  });

  public regionTabs = computed(() => {
    const data = this.data();
    if (!data?.regionTabs) return [];

    const tabs = data.regionTabs.map((region) => {
      const tab = {
        id: region._uid,
        label: region.tabName,
        disabled: false,
      };
      return tab;
    });
    return tabs;
  });

  public currentShowrooms = computed(() => {
    const selected = this.selectedRegion();
    return this.showroomsData().find((r) => r.regionId === selected)?.showrooms ?? [];
  });

  private selectedRegionInternal = signal<string | null>(null);
  public selectedRegion = computed(() => this.selectedRegionInternal());

  constructor() {
    effect(() => {
      const availableRegions = this.regionTabs();
      const initialRegion = this.initialRegion();
      const exhibutorId = this.showroomsData().sort((a, b) => b.showrooms.length - a.showrooms.length)[0]?.regionId;
      if (availableRegions.length > 0) {
        if (initialRegion && availableRegions.map((region) => region.label).includes(initialRegion)) {
          this.selectedRegionInternal.set(exhibutorId);
        } else {
          this.selectedRegionInternal.set(availableRegions[0].label);
        }
      }
    });
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
