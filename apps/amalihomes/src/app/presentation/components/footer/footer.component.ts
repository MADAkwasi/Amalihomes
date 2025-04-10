import { Component, ChangeDetectionStrategy, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@amalihomes/shared';
import { RouterLink } from '@angular/router';
import { HyperlinksComponent } from '../hyperlinks/hyperlinks.component';
import { FormsModule } from '@angular/forms';
import { EmailValidatorDirective } from '../../../logic/directives/email-validator/email-validator.directive';
import { LucideAngularModule } from 'lucide-angular';
import { Store } from '@ngrx/store';
import { selectSection } from '../../../logic/stores/selectors/storyblok.selectors';

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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  private readonly store = inject(Store);
  protected readonly data = this.store.selectSignal(selectSection('footer'));
  private readonly findLinksByTitles = (key: string) =>
    computed(() => this.data()?.linksSection?.find((links) => links.key === key));

  protected readonly quickLinks = this.findLinksByTitles('quickLinks');
  protected readonly companyLinks = this.findLinksByTitles('company');
  protected readonly legalServicesLinks = this.findLinksByTitles('legalServices');
  protected readonly mobileViewLinks = this.findLinksByTitles('mobileLinks');
  protected email!: string;

  protected onSubmit(): void {
    return;
  }
}
