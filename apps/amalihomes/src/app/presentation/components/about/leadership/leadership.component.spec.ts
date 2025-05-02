import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeadershipComponent } from './leadership.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { By } from '@angular/platform-browser';

describe('LeadershipComponent', () => {
  let component: LeadershipComponent;
  let fixture: ComponentFixture<LeadershipComponent>;
  let store: MockStore;

  const initialState = {
    storyblokPage: {
      content: {
        body: [
          {
            component: 'leadership_team',
            heading: 'Meet Our Leaders',
            description: 'The team behind the vision',
            team: [
              {
                _uid: '1',
                name: 'Jane Doe',
                role: 'CEO',
                image: { filename: 'jane.jpg' },
              },
              {
                _uid: '2',
                name: 'John Smith',
                role: 'CTO',
                image: { filename: 'john.jpg' },
              },
            ],
          },
        ],
      },
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeadershipComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(LeadershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render heading and description', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Meet Our Leaders');
    expect(compiled.textContent).toContain('The team behind the vision');
  });

  it('should render all leaders', () => {
    const leaderEls = fixture.debugElement.queryAll(By.css('[data-testid="leader-card"]'));
    expect(leaderEls.length).toBe(2);

    const firstCardText = leaderEls[0].nativeElement.textContent;
    const secondCardText = leaderEls[1].nativeElement.textContent;

    expect(firstCardText).toContain('Jane Doe');
    expect(firstCardText).toContain('CEO');
    expect(secondCardText).toContain('John Smith');
    expect(secondCardText).toContain('CTO');
  });
});
