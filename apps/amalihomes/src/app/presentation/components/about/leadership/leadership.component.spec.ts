import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeadershipComponent } from './leadership.component';
import { ImageComponent } from '@amalihomes/shared';
import { By } from '@angular/platform-browser';
import { teamMembers } from 'apps/amalihomes/src/app/logic/data/constants/about';

describe('LeadershipComponent', () => {
  let component: LeadershipComponent;
  let fixture: ComponentFixture<LeadershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeadershipComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LeadershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct title and description', () => {
    expect(component.title()).toBe('Global Presence');
    expect(component.description()).toContain('AmaliHomes has expanded globally');
  });

  it('should render the correct number of leadership cards', () => {
    const imageEls = fixture.debugElement.queryAll(By.directive(ImageComponent));
    expect(imageEls.length).toBe(teamMembers.data.length);
  });
  it('should render the heading and description in the DOM', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Global Presence');
    expect(compiled.textContent).toContain('AmaliHomes has expanded globally');
  });
});
