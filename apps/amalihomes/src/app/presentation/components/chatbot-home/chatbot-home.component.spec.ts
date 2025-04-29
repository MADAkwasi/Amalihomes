import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatbotHomeComponent } from './chatbot-home.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ChatBotSalesRep } from '../../../types/chatbot';

describe('ChatbotHomeComponent', () => {
  let component: ChatbotHomeComponent;
  let fixture: ComponentFixture<ChatbotHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatbotHomeComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(ChatbotHomeComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('salesRepresentative', {
      name: 'Test Sales Rep',
      image: 'test-image.jpg',
    } as ChatBotSalesRep);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
