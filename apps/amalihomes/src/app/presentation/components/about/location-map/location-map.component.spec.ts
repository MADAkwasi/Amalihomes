import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LocationMapComponent } from './location-map.component';
import { DomSanitizer } from '@angular/platform-browser';

describe('LocationMapComponent', () => {
  let component: LocationMapComponent;
  let fixture: ComponentFixture<LocationMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationMapComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LocationMapComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('location', 'Accra, Ghana');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should sanitize and set the correct map URL on init', () => {
    const sanitizer: DomSanitizer = TestBed.inject(DomSanitizer);
    const expectedUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyCbJlpT4r7r2EH_eCBG7_sF6IwdFs7PwMI&q=Accra%2C%20Ghana`;
    const sanitized = sanitizer.bypassSecurityTrustResourceUrl(expectedUrl);
    expect(component.mapUrl).toEqual(sanitized);
  });
});
