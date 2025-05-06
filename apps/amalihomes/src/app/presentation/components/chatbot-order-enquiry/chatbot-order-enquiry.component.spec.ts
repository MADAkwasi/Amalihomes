import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatbotOrderEnquiryComponent } from './chatbot-order-enquiry.component';
import { provideMockStore } from '@ngrx/store/testing';
import { selectStoryblokPageState } from '../../../logic/stores/selectors/storyblok.selectors';
import { mockedStore } from '../../../logic/data/testing/mocked-data';

describe('ChatbotOrderEnquiryComponent', () => {
  let component: ChatbotOrderEnquiryComponent;
  let fixture: ComponentFixture<ChatbotOrderEnquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatbotOrderEnquiryComponent],
      providers: [
        provideMockStore({
          selectors: [
            {
              selector: selectStoryblokPageState,
              value: mockedStore,
            },
          ],
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ChatbotOrderEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
