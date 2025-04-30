import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatbotQuestionIconComponent } from './chatbot-question-icon.component';

describe('ChatbotQuestionIconComponent', () => {
  let component: ChatbotQuestionIconComponent;
  let fixture: ComponentFixture<ChatbotQuestionIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatbotQuestionIconComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChatbotQuestionIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
