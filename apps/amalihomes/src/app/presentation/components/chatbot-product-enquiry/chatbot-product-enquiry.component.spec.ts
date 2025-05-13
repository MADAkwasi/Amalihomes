import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatbotProductEnquiryComponent } from './chatbot-product-enquiry.component';
import { provideMockStore } from '@ngrx/store/testing';
import { selectStoryblokPageState } from '../../../logic/stores/selectors/storyblok.selectors';
import { mockedStore } from '../../../logic/data/testing/mocked-data';
import { selectProducts } from '../../../logic/stores/selectors/dummy-data.selector';
import { dummyData } from '../../../logic/stores/mocked-data';

describe('ChatbotProductEnquiryComponent', () => {
  let component: ChatbotProductEnquiryComponent;
  let fixture: ComponentFixture<ChatbotProductEnquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatbotProductEnquiryComponent],
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

    fixture = TestBed.createComponent(ChatbotProductEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
