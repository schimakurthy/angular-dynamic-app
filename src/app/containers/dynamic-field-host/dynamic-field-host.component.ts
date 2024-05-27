import { Component, Input, SimpleChanges, Type, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldDirective } from '../field.directive';
import { SelectionFieldComponent } from 'src/app/shared/components/selection-field/selection-field.component';
import { InputFieldComponent } from 'src/app/shared/components/input-field/input-field.component';

@Component({
  selector: 'app-dynamic-field-host',
  templateUrl: './dynamic-field-host.component.html',
  styleUrls: ['./dynamic-field-host.component.scss']
})
export class DynamicFieldHostComponent {
  @Input() type!: string;
  @Input() label?: string;
  @Input() control!: FormControl;
  @Input() config!: any;
  @Input() dependencies = [];

  @ViewChild(FieldDirective, { static: true })
  fieldDirective!: FieldDirective;

  fieldTypes: {
    [fieldType: string]: Type<any>;
  } = {
    selection: SelectionFieldComponent,
    input: InputFieldComponent
  }

  ngOnInit(){
    this.loadComponent();
  }

  ngOnChanges(changes: SimpleChanges){
    const fields = ['label'];

    const shouldReloadComponent = fields.some(
      (field) =>
        changes[field]?.previousValue &&
        changes[field].previousValue !== changes[field].currentValue
    );

    if(shouldReloadComponent){
      this.loadComponent();
    }
  }

  loadComponent(){
    const fieldType = this.fieldTypes[this.type];

    const viewContainerRef = this.fieldDirective.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<FieldDirective>(fieldType);
    componentRef.instance.label = this.label;
    componentRef.instance.control = this.control;
    componentRef.instance.config = this.config;
    // componentRef.instance.dependencies = this.dependencies;
    componentRef.instance.type = this.type;

    componentRef.changeDetectorRef.detectChanges();
  }
}
