import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatbotHomeIconComponent } from './chatbot-home-icon.component';

describe('ChatbotHomeIconComponent', () => {
  let component: ChatbotHomeIconComponent;
  let fixture: ComponentFixture<ChatbotHomeIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatbotHomeIconComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChatbotHomeIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
