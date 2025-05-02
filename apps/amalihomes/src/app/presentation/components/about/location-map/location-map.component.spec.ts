import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LocationMapComponent } from './location-map.component';
import { Store } from '@ngrx/store';
import { PLATFORM_ID } from '@angular/core';
import { ResponsiveHeadingComponent } from '../responsive-heading/responsive-heading.component';

describe('LocationMapComponent', () => {
  let component: LocationMapComponent;
  let fixture: ComponentFixture<LocationMapComponent>;
  let storeStub: { selectSignal: jest.Mock };

  beforeEach(async () => {
    storeStub = {
      selectSignal: jest.fn().mockReturnValue(() => null),
    };

    await TestBed.configureTestingModule({
      imports: [LocationMapComponent, ResponsiveHeadingComponent],
      providers: [
        { provide: Store, useValue: storeStub },
        { provide: PLATFORM_ID, useValue: 'browser' },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LocationMapComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
