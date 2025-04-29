import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabsComponent } from './tabs.component';
import { provideMockStore } from '@ngrx/store/testing';
import { selectStoryblokPageState } from 'apps/amalihomes/src/app/logic/stores/selectors/storyblok.selectors';
import { FaqsPageTestData } from 'apps/amalihomes/src/app/logic/stores/testing/faqs-page';
describe('TabsComponent', () => {
  let fixture: ComponentFixture<TabsComponent>;
  let component: TabsComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsComponent],
      providers: [
        provideMockStore({
          selectors: [{ selector: selectStoryblokPageState, value: FaqsPageTestData.content }],
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
