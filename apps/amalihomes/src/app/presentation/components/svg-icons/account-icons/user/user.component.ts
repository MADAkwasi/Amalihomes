import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-icon',
  imports: [CommonModule],
  templateUrl: './user.component.html',
})
export class UserComponent {
  public selected = input(false);
}
