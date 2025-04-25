import { Component, ChangeDetectionStrategy, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@amalihomes/shared';
import { RouterModule } from '@angular/router';
import { HyperlinksComponent } from '../hyperlinks/hyperlinks.component';
import { FormsModule } from '@angular/forms';
import { EmailValidatorDirective } from '../../../logic/directives/email-validator/email-validator.directive';
import { LucideAngularModule } from 'lucide-angular';
import { Store } from '@ngrx/store';
import { selectSection } from '../../../logic/stores/selectors/storyblok.selectors';
import { FacebookIconComponent } from '../svg-icons/facebook-icon/facebook-icon.component';
import { InstaIconComponent } from '../svg-icons/insta-icon/insta-icon.component';
import { XIconComponent } from '../svg-icons/x-icon/x-icon.component';
import { LinkedInIconComponent } from '../svg-icons/linkedIn-icon/linkedin-icon.component';
import { YoutubeIconComponent } from '../svg-icons/youtube-icon/youtube-icon.component';

@Component({
  selector: 'app-footer',
  imports: [
    CommonModule,
    ButtonComponent,
    RouterModule,
    HyperlinksComponent,
    FormsModule,
    EmailValidatorDirective,
    LucideAngularModule,
    FacebookIconComponent,
    InstaIconComponent,
    XIconComponent,
    LinkedInIconComponent,
    YoutubeIconComponent,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  private readonly store = inject(Store);
  protected readonly data = this.store.selectSignal(selectSection('footer'));
  protected readonly groupedLinks = computed(() => {
    return this.data()?.linksSection ?? [];
  });

  protected email!: string;

  protected onSubmit(): void {
    return;
  }
}
