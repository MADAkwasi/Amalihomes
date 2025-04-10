import { inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { RobotsMetaContentKeys, MetaTagsData, MetaImagesProps } from '../../../types/meta-tags';

@Injectable({
  providedIn: 'root',
})
export class MetaTagsService {
  private readonly titleService = inject(Title);
  private readonly metaService = inject(Meta);
  private document = inject(DOCUMENT);

  public updateMetaData({
    pageCanonicalLink,
    pageTitle,
    metaLocale,
    metaType,
    metaSiteName,
    metaDescription,
    metaKeywords = [],
    metaOpenGraphUrl,
    metaRobots,
    ...imageParams
  }: MetaTagsData): void {
    const getMetaRobotsVAlues = (key: string) => metaRobots[key as RobotsMetaContentKeys];

    this.metaService.updateTag({
      name: 'robots',
      content: Object.keys(metaRobots).filter(getMetaRobotsVAlues).map(getMetaRobotsVAlues).join(', '),
    });

    this.titleService.setTitle(pageTitle);
    this.setMetaTitles(pageTitle);
    this.setCanonicalURL(pageCanonicalLink);
    this.setMetaDescriptions(metaDescription);
    this.metaService.updateTag({ property: 'og:url', content: metaOpenGraphUrl || pageCanonicalLink });
    this.metaService.updateTag({ property: 'og:type', content: metaType });
    this.metaService.updateTag({ property: 'og:locale', content: metaLocale });
    this.metaService.updateTag({ property: 'og:site_name', content: metaSiteName });

    if (metaKeywords.length > 0) {
      this.metaService.updateTag({ name: 'keywords', content: metaKeywords.join(', ') });
    }

    this.setMetaImages(imageParams);
  }

  private setCanonicalURL(url: string): void {
    let link = this.document.querySelector('link[rel="canonical"]') || null;
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  private setMetaTitles(pageTitle: string) {
    this.metaService.updateTag({ property: 'og:title', content: pageTitle });
    this.metaService.updateTag({ name: 'twitter:title', content: pageTitle });
  }

  private setMetaDescriptions(metaDescription: string) {
    this.metaService.updateTag({ name: 'description', content: metaDescription });
    this.metaService.updateTag({ property: 'og:description', content: metaDescription });
    this.metaService.updateTag({ name: 'twitter:description', content: metaDescription });
  }

  private setMetaImages({
    metaOpenGraphSecureImageUrl,
    metaOpenGraphImageUrl,
    metaOpenGraphImageDimension,
    metaTwitterCard,
    metaOpenGraphImageAlt,
  }: MetaImagesProps) {
    const imageUrl = metaOpenGraphSecureImageUrl || metaOpenGraphImageUrl;
    const isSecure = !!metaOpenGraphSecureImageUrl;

    if (imageUrl) {
      this.metaService.updateTag({ property: 'og:image', content: imageUrl });
      this.metaService.updateTag({ name: 'twitter:image', content: imageUrl });
      this.metaService.updateTag({ name: 'twitter:card', content: metaTwitterCard || 'summary' });
      this.metaService.updateTag({ property: 'og:image:alt', content: metaOpenGraphImageAlt || 'Page image' });

      if (metaOpenGraphImageDimension) {
        this.metaService.updateTag({ property: 'og:image:width', content: `${metaOpenGraphImageDimension.width}` });
        this.metaService.updateTag({ property: 'og:image:height', content: `${metaOpenGraphImageDimension.height}` });
      }

      if (isSecure) {
        this.metaService.updateTag({ property: 'og:image:secure_url', content: metaOpenGraphSecureImageUrl });
      }
    }
  }
}
