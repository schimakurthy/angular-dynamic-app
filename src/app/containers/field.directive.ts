import { Directive, ViewContainerRef } from '@angular/core';
import { FormControl } from '@angular/forms';

@Directive({
  selector: '[appField]'
})
export class FieldDirective {

  label?: string = '';
  control!: FormControl;
  config!: any;
  type?: string = '';

  constructor(public viewContainerRef: ViewContainerRef){}

}
