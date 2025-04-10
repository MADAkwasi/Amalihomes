import { TestBed } from '@angular/core/testing';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { MetaTagsService } from './meta-tags.service';
import { mockMetaTagsData } from '../../data/testing/meta-tags';

describe('MetaTagsService', () => {
  let service: MetaTagsService;
  let titleService: Title;
  let metaService: Meta;
  let document: Document;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MetaTagsService,
        Title,
        Meta,
        {
          provide: DOCUMENT,
          useValue: {
            querySelector: jest.fn(),
            createElement: jest.fn(),
            getElementsByTagName: jest.fn(),
            head: { appendChild: jest.fn() },
          },
        },
      ],
    });

    service = TestBed.inject(MetaTagsService);
    titleService = TestBed.inject(Title);
    metaService = TestBed.inject(Meta);
    document = TestBed.inject(DOCUMENT);

    jest.spyOn(titleService, 'setTitle');
    jest.spyOn(metaService, 'updateTag');
    jest.spyOn(document, 'querySelector');
    jest.spyOn(document, 'createElement');
    jest.spyOn(document.head, 'appendChild');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set canonical URL correctly', () => {
    const mockLinkElement = { setAttribute: jest.fn() };
    (document.querySelector as jest.Mock).mockReturnValue(mockLinkElement);

    service['setCanonicalURL'](mockMetaTagsData.pageCanonicalLink);

    expect(document.querySelector).toHaveBeenCalledWith('link[rel="canonical"]');
    expect(mockLinkElement.setAttribute).toHaveBeenCalledWith('href', mockMetaTagsData.pageCanonicalLink);
  });

  it('should create and append canonical URL if not exists', () => {
    (document.querySelector as jest.Mock).mockReturnValue(null);
    const mockLinkElement = { setAttribute: jest.fn() };
    (document.createElement as jest.Mock).mockReturnValue(mockLinkElement);

    service['setCanonicalURL'](mockMetaTagsData.pageCanonicalLink);

    expect(document.querySelector).toHaveBeenCalledWith('link[rel="canonical"]');
    expect(document.createElement).toHaveBeenCalledWith('link');
    expect(mockLinkElement.setAttribute).toHaveBeenCalledWith('rel', 'canonical');
    expect(mockLinkElement.setAttribute).toHaveBeenCalledWith('href', mockMetaTagsData.pageCanonicalLink);
    expect(document.head.appendChild).toHaveBeenCalledWith(mockLinkElement);
  });
});
