import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatbotGeneralEnquiryComponent } from './chatbot-general-enquiry.component';

describe('ChatbotGeneralEnquiryComponent', () => {
  let component: ChatbotGeneralEnquiryComponent;
  let fixture: ComponentFixture<ChatbotGeneralEnquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatbotGeneralEnquiryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChatbotGeneralEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
