import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnderConstructionComponent } from './under-construction.component';
import { provideMockStore } from '@ngrx/store/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { selectStoryblokPageState } from '../../../logic/stores/selectors/storyblok.selectors';
import { HomePageTestData } from '../../../logic/stores/testing/home-page';

describe('UnderConstructionComponent', () => {
  let component: UnderConstructionComponent;
  let fixture: ComponentFixture<UnderConstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnderConstructionComponent, HttpClientTestingModule],
      providers: [
        provideMockStore({
          selectors: [{ selector: selectStoryblokPageState, value: HomePageTestData.locale }],
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UnderConstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
