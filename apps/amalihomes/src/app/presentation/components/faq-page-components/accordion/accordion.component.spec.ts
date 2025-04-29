import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccordionComponent } from './accordion.component';

describe('AccordionComponent', () => {
  let component: AccordionComponent;
  let fixture: ComponentFixture<AccordionComponent>;

  const mockAccordionData = [
    {
      question: 'What is your return policy?',
      answers: ['You can return within 30 days.'],
    },
    {
      question: 'How do I track my order?',
      answers: ['Use the tracking link in your email.'],
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AccordionComponent);
    fixture.componentRef.setInput('accordionData', null);

    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should reset openIndices when accordionData is set', () => {
    fixture.componentRef.setInput('accordionData', mockAccordionData);
    fixture.detectChanges();

    expect(component['openIndices']().size).toBe(0);
  });

  it('should toggle an index open and closed', () => {
    fixture.componentRef.setInput('accordionData', mockAccordionData);
    component['onToggle'](0);

    expect(component['isOpen'](0)).toBe(true);

    component['onToggle'](0);
    expect(component['isOpen'](1)).toBe(false);
  });

  it('should handle toggling multiple indices', () => {
    fixture.componentRef.setInput('accordionData', mockAccordionData);
    component['onToggle'](0);
    component['onToggle'](1);

    expect(component['isOpen'](0)).toBe(true);
    expect(component['isOpen'](1)).toBe(true);
  });
});
