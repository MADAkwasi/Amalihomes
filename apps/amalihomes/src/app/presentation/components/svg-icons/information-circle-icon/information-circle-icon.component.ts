import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-information-circle-icon',
  imports: [CommonModule],
  templateUrl: './information-circle-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InformationCircleIconComponent {}
