import { Component, signal, inject, effect, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InteractionsService } from '../../../logic/services/interactions/interactions.service';
import { LocalizationService } from '../../../logic/services/localization/localization.service';
import { Store } from '@ngrx/store';
import { selectLocale } from '../../../logic/stores/selectors/storyblok.selectors';

@Component({
  selector: 'app-under-construction',
  imports: [CommonModule],
  templateUrl: './under-construction.component.html',
  styleUrl: './under-construction.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnderConstructionComponent {
  private readonly store = inject(Store);
  private readonly interactionsService = inject(InteractionsService);
  private readonly localizationService = inject(LocalizationService);
  private readonly selectedLocale = this.store.selectSignal(selectLocale);
  protected time = signal(this.getCurrentTime());
  protected displayText = signal('');
  public lastText = signal('');

  constructor() {
    setInterval(() => {
      this.time.set(this.getCurrentTime());
    }, 1000);

    effect(() => {
      const current = this.interactionsService.lastInteractedText();
      if (current) {
        this.lastText.set(current);
      }

      this.displayText.set(
        this.localizationService.translateUnderConstruction(this.selectedLocale()?.languageCode ?? 'en'),
      );
    });
  }

  protected getCurrentTime() {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    };
    return date.toLocaleTimeString('en-US', options);
  }
}
