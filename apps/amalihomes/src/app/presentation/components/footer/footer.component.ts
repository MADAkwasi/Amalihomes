import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@amalihomes/shared';
import { RouterLink } from '@angular/router';
import { HyperlinksComponent } from '../hyperlinks/hyperlinks.component';
import { companyLinks, legalServicesLinks, quickLinks } from '../../../logic/data/constants/links';
import { FormsModule } from '@angular/forms';
import { EmailValidatorDirective } from '../../../logic/directives/email-validator/email-validator.directive';
import { Facebook, Instagram, Linkedin, LucideAngularModule, Twitter, Youtube } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  imports: [
    CommonModule,
    ButtonComponent,
    RouterLink,
    HyperlinksComponent,
    FormsModule,
    EmailValidatorDirective,
    LucideAngularModule,
  ],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  public readonly facebookIcon = Facebook;
  public readonly instagramIcon = Instagram;
  public readonly twitterIcon = Twitter;
  public readonly linkedinIcon = Linkedin;
  public readonly youtubeIcon = Youtube;
  public readonly quickLinks = signal(quickLinks);
  public readonly companyLinks = signal(companyLinks);
  public readonly legalServicesLinks = signal(legalServicesLinks);
  public email!: string;

  public onSubmit(): void {
    return;
  }
}
