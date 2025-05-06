import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatbotHomeComponent } from './chatbot-home.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ChatBotSalesRep } from '../../../types/chatbot';
import { provideMockStore } from '@ngrx/store/testing';
import { selectStoryblokPageState } from '../../../logic/stores/selectors/storyblok.selectors';
import { mockedStore } from '../../../logic/data/testing/mocked-data';

describe('ChatbotHomeComponent', () => {
  let component: ChatbotHomeComponent;
  let fixture: ComponentFixture<ChatbotHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatbotHomeComponent],
      schemas: [NO_ERRORS_SCHEMA],
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
