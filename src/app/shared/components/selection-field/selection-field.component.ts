import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-selection-field',
  templateUrl: './selection-field.component.html',
  styleUrls: ['./selection-field.component.scss']
})
export class SelectionFieldComponent {
  @Input() label?: string;
  @Input() control!: FormControl;
  @Input() config!: any;

  display = new FormControl('');
}
