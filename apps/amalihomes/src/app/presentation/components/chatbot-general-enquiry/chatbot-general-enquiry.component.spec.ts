import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatbotGeneralEnquiryComponent } from './chatbot-general-enquiry.component';
import { provideMockStore } from '@ngrx/store/testing';
import { selectStoryblokPageState } from '../../../logic/stores/selectors/storyblok.selectors';
import { mockedStore } from '../../../logic/data/testing/mocked-data';
import { selectProducts } from '../../../logic/stores/selectors/dummy-data.selector';
import { dummyData } from '../../../logic/stores/mocked-data';

describe('ChatbotGeneralEnquiryComponent', () => {
  let component: ChatbotGeneralEnquiryComponent;
  let fixture: ComponentFixture<ChatbotGeneralEnquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatbotGeneralEnquiryComponent],
      providers: [
        provideMockStore({
          selectors: [
            {
              selector: selectStoryblokPageState,
              value: mockedStore,
            },
            { selector: selectProducts, value: dummyData },
          ],
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ChatbotGeneralEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
