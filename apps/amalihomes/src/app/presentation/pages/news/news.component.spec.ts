import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewsComponent } from './news.component';
import { provideMockStore } from '@ngrx/store/testing';
import { selectStoryblokPageState } from '../../../logic/stores/selectors/storyblok.selectors';
import { mockedStore } from '../../../logic/data/testing/mocked-data';

describe('NewsComponent', () => {
  let component: NewsComponent;
  let fixture: ComponentFixture<NewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsComponent],
      providers: [
        provideMockStore({
          selectors: [{ selector: selectStoryblokPageState, value: mockedStore }],
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
