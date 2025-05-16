import { TestBed } from '@angular/core/testing';
import { ResponsivePaginationService } from './responsive-pagination.service';

describe('ResponsivePaginationService', () => {
  let service: ResponsivePaginationService;

  const mockMatchMedia = (width: number) => {
    window.matchMedia = jest.fn().mockImplementation((query: string) => ({
      matches: (query === '(min-width: 1024px)' && width >= 1024) || (query === '(min-width: 768px)' && width >= 768),
      media: query,
      onchange: null,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }));
  };

  beforeEach(() => {
    mockMatchMedia(1200);

    TestBed.configureTestingModule({});
    service = TestBed.inject(ResponsivePaginationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return 12 for lg screens (≥1024px)', () => {
    expect(service.getPerPage()()).toBe(12);
  });

  it('should return 9 for md screens (≥768px and <1024px)', () => {
    mockMatchMedia(800);
    window.dispatchEvent(new Event('resize'));
    expect(service.getPerPage()()).toBe(9);
  });

  it('should return 8 for sm screens (<768px)', () => {
    mockMatchMedia(600);
    window.dispatchEvent(new Event('resize'));
    expect(service.getPerPage()()).toBe(8);
  });

  it('should update value on resize', () => {
    mockMatchMedia(1200);
    window.dispatchEvent(new Event('resize'));
    expect(service.getPerPage()()).toBe(12);

    mockMatchMedia(600);
    window.dispatchEvent(new Event('resize'));
    expect(service.getPerPage()()).toBe(8);
  });
});
