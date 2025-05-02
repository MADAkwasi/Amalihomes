import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatbotOrderEnquiryComponent } from './chatbot-order-enquiry.component';

describe('ChatbotOrderEnquiryComponent', () => {
  let component: ChatbotOrderEnquiryComponent;
  let fixture: ComponentFixture<ChatbotOrderEnquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatbotOrderEnquiryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChatbotOrderEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
