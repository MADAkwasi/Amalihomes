import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { provideMockStore } from '@ngrx/store/testing';
import { selectIsMenuOpen, selectIsSearching } from './logic/stores/selectors/interactions.selector';
import { selectStoryblokPageState } from './logic/stores/selectors/storyblok.selectors';
import { HomePageTestData } from './logic/stores/testing/home-page';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, AppComponent],
      providers: [
        provideMockStore({
          selectors: [
            { selector: selectIsMenuOpen, value: false },
            { selector: selectIsSearching, value: false },
            { selector: selectStoryblokPageState, value: HomePageTestData.content },
          ],
        }),
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should render router outlet', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('router-outlet')).toBeTruthy();
  });
});
