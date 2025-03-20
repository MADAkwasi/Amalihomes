import { Component, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Search, Mail, Lock, Eye, EyeOff } from 'lucide-angular';

@Component({
  selector: 'lib-text-input',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.css',
})
export class InputComponent {
  @Input() variant: 'primary' | 'secondary' = 'primary';
  @Input() placeholder = '';
  @Input() iconSize = 20;
  @Input() strokeWidth = 2;
  @Input() leftIcon?: keyof typeof this.icons;
  @Input() rightIcon?: keyof typeof this.icons;
  @Input() value = '';
  @Output() valueChange = new EventEmitter<string>();

  public icons = {
    search: Search,
    mail: Mail,
    lock: Lock,
    eye: Eye,
    eyeOff: EyeOff,
  };

  @HostBinding('class') get hostClasses() {
    return this.variant === 'secondary' ? 'w-full' : '';
  }

  onInput(event: Event) {
    this.value = (event.target as HTMLInputElement).value;
    this.valueChange.emit(this.value);
  }
}
