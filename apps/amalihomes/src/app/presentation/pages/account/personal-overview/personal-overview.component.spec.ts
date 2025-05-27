import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonalOverviewComponent } from './personal-overview.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { selectUserAuthenticationState } from 'apps/amalihomes/src/app/logic/stores/selectors/auth.selector';

describe('PersonalOverviewComponent', () => {
  let component: PersonalOverviewComponent;
  let fixture: ComponentFixture<PersonalOverviewComponent>;
  let store: MockStore;

  const initialState = {
    auth: {
      user: {
        id: '1',
        full_name: 'Test User',
        email: 'test@example.com',
        avatar_url: 'https://example.com/avatar.jpg',
        phone: '+233 123456789',
        username: 'testuser',
      },
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalOverviewComponent],
      providers: [
        provideMockStore({
          initialState,
          selectors: [
            {
              selector: selectUserAuthenticationState,
              value: initialState.auth,
            },
          ],
        }),
      ],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(PersonalOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form with user data', () => {
    expect(component.form.value.fullName).toBe('Test User');
    expect(component.form.value.username).toBe('testuser');
    expect(component.form.value.email).toBe('test@example.com');
  });
});
