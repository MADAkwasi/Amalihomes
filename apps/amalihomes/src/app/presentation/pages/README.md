# SEO-READY WEBSITE

Search Engine Optimization (SEO) is the process of improving the visibility of a website or a web page in search engines. It is important for increasing organic traffic and improving the overall user experience. (Refer to [SEO](https://en.wikipedia.org/wiki/Search_engine_optimization) for more information).

## How to make a page SEO-ready?

Making a page SEO-ready involves several steps to ensure that the page is optimized for search engines. First, ensure that the page is accessible to search engine crawlers. This includes using proper HTML tags, providing alt text for images, and ensuring that the page loads quickly. Next, ensure the page has a descriptive title and relevant meta tags. Also, ensure that the page is mobile-friendly and has a responsive design. This will improve the user experience and help with search engine rankings.

First step in making a page SEO-ready in our project is by injecting the `MetaTagsService` in the page's component. This service is responsible for managing the meta tags of the page. It provides a method to update the meta tag attributes of the page. If you need to do more than just updating the meta tags, you can use the `Meta` service from `@angular/platform-browser`.

```ts
import { Component } from '@angular/core';
import { MetaTagsService } from '../../../logic/services/meta-tags/meta-tags.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
})
export class PageComponent {
  private metaTagsService = inject(MetaTagsService);
  ngOnInit() {
    // Update the meta tags for the page
    this.metaTagsService.updateMetaData({
      pageCanonicalLink: `${environment.SERVER_URL}/<page-url-path>`,
      metaDescription: 'This is a sample page description.',
      metaLocale: 'en_US', // Update dynamically based on the user's locale
      metaRobots: { preview: 'max-image-preview:large', index: 'index', follow: 'follow' },
      metaType: 'website',
      pageTitle: 'Page Title',
      metaKeywords: ['keyword1', 'keyword2', 'keyword3'],
      // and more...
    });
  }
}
```

1. **Add a title**: The title of the page should be descriptive and include relevant keywords. It should be unique for each page and not exceed 60 characters. The title should be added to the `pageTitle` property of the options passed to `updateMetaData` method.

2. **Add a description**: The description of the page should be concise and informative. It should include relevant keywords and not exceed 160 characters. The description should be added to the `metaDescription` property of the options passed to `updateMetaData` method.

3. **Add keywords**: The keywords of the page should be relevant to the content of the page. They should be added to the `metaKeywords` property of the options passed to `updateMetaData` method.

4. **Add canonical link**: The canonical link of the page should be the the direct link to the page. This is important for preventing duplicate content issues. The canonical link should be added to the `pageCanonicalLink` property of the options passed to `updateMetaData` method.

5. **Add robots meta tag**: The robots meta tag should be added to the page to control how search engines index the page. The robots meta tag should be added to the `metaRobots` property of the options passed to `updateMetaData` method. The `preview`, `index`, and `follow` properties are optional and can be set to `noindex` or `nofollow` depending on the contents of the page.

6. **Add Open Graph meta tags**: Open Graph meta tags are used to control how the page is displayed on social media platforms.

## What more can be done to improve SEO?

Search Engine Optimization (SEO) is a complex and ongoing process. Here are some additional steps that can be taken to improve SEO:

1. **Use header tags**: Use header tags (H1, H2, H3, etc.) to structure the content of the page. This helps search engines understand the hierarchy of the content and improves readability for users.

2. **Use semantic HTML**: Use semantic HTML tags (such as `<article>`, `<section>`, `<header>`, `<footer>`, etc.) to improve the structure and meaning of the content. This helps search engines understand the content of the page and improves accessibility for users with disabilities.

3. **Optimize images**: Use descriptive file names and alt text for images. This helps search engines understand the content of the images and improves accessibility for users with disabilities.

4. **Use internal linking**: Use internal links to connect related pages on the website. This helps search engines understand the structure of the website and improves navigation for users.

5. **Use structured data**: Use structured data (such as Schema.org) to provide additional information about the content of the page. This helps search engines understand the content of the page and improves visibility in search results.
