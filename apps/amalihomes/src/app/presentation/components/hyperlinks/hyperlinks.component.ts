import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Link } from '../../../logic/data/constants/links';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hyperlinks',
  imports: [CommonModule, RouterLink],
  templateUrl: './hyperlinks.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HyperlinksComponent {
  @Input() public category!: string;
  @Input() public links!: Link[];
}
