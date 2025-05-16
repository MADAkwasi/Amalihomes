import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavaigationPanelComponent } from './navaigation-panel.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DashboardNavigationTabs } from './data';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { of } from 'rxjs';

describe('NavaigationPanelComponent', () => {
  let component: NavaigationPanelComponent;
  let fixture: ComponentFixture<NavaigationPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavaigationPanelComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        RouterLink,
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({}),
            queryParams: of({}),
            snapshot: {
              paramMap: new Map(),
              queryParamMap: new Map(),
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NavaigationPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('toggleExpand should toggle the expanded signal and emit the expandEvent', () => {
    const initialExpanded = component['expanded']();
    const emitSpy = jest.spyOn(component.expandEvent, 'emit');

    component['toggleExpand']();

    expect(component['expanded']()).toBe(!initialExpanded);
    expect(emitSpy).toHaveBeenCalledWith(!initialExpanded);
  });
});
