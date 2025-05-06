import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatbotNavigationComponent } from './chatbot-navigation.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ChatBotSalesRep, ChatBotTabs } from '../../../types/chatbot';
import { provideMockStore } from '@ngrx/store/testing';
import { selectStoryblokPageState } from '../../../logic/stores/selectors/storyblok.selectors';
import { mockedStore } from '../../../logic/data/testing/mocked-data';

describe('ChatbotNavigationComponent', () => {
  let component: ChatbotNavigationComponent;
  let fixture: ComponentFixture<ChatbotNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatbotNavigationComponent],
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

    fixture = TestBed.createComponent(ChatbotNavigationComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('salesRepresentative', {
      image: 'test-image.jpg',
      name: 'Test Sales Rep',
    } as ChatBotSalesRep);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle expandChat when handleExpandChat is called', () => {
    component['expandChat'] = false;
    component['handleExpandChat']();
    expect(component['expandChat']).toBe(true);
  });

  it('should navigate through the tabs', () => {
    component['navigateTo'](ChatBotTabs.home);
    expect(component['activeTab']).toBe(ChatBotTabs.home);
    component['navigateTo'](ChatBotTabs.chat);
    expect(component['activeTab']).toBe(ChatBotTabs.chat);
    component['navigateTo'](ChatBotTabs.help);
    expect(component['activeTab']).toBe(ChatBotTabs.help);
  });

  it('should return true for showBackButton when not on home tab and false when on home tab', () => {
    component['navigateTo'](ChatBotTabs.chat);
    expect(component['showBackButton']).toBe(true);
    component['navigateTo'](ChatBotTabs.home);
    expect(component['showBackButton']).toBe(false);
  });

  it('should return true for isSelected when a tab is active', () => {
    component['navigateTo'](ChatBotTabs.home);
    expect(component['isSelected'](ChatBotTabs.home)).toBe(true);
    component['navigateTo'](ChatBotTabs.chat);
    expect(component['isSelected'](ChatBotTabs.chat)).toBe(true);
    component['navigateTo'](ChatBotTabs.help);
    expect(component['isSelected'](ChatBotTabs.help)).toBe(true);
  });
});
