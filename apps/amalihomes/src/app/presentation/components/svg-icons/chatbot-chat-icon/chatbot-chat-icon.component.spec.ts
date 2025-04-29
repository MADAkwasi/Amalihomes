import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatbotChatIconComponent } from './chatbot-chat-icon.component';

describe('ChatbotChatIconComponent', () => {
  let component: ChatbotChatIconComponent;
  let fixture: ComponentFixture<ChatbotChatIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatbotChatIconComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChatbotChatIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
