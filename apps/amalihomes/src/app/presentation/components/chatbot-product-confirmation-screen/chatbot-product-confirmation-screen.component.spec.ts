import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatbotProductConfirmationScreenComponent } from './chatbot-product-confirmation-screen.component';

describe('ChatbotProductConfirmationScreenComponent', () => {
  let component: ChatbotProductConfirmationScreenComponent;
  let fixture: ComponentFixture<ChatbotProductConfirmationScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatbotProductConfirmationScreenComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChatbotProductConfirmationScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
