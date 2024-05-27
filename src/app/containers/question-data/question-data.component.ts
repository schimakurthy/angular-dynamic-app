import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-question-data',
  templateUrl: './question-data.component.html',
  styleUrls: ['./question-data.component.scss']
})
export class QuestionDataComponent implements OnInit{
  @Input() sectionConfig: any;

  _sectionData: any;
  @Input() set sectionData(data: any){
    this._sectionData = data;
    this.form.patchValue(data[this.sectionId], {emitEvent: false})
  }

  get sectionData(): any{
    return this._sectionData;
  }

  @Output() sectionDataUpdate = new EventEmitter<any>();

  form = new FormGroup({});

  get sectionId(): string{
    return this.sectionConfig.sectionId;
  }

  ngOnInit() {
    // Get current section Id questions
    const questionData = this.sectionData[this.sectionId] || {};

    // add form controls 
    // optionally set hidden, label or info types and add a check not to create a formcontrol for those
    this.sectionConfig.fields.forEach(({ name }: any) => {
      const value = questionData[name];
      this.form.addControl(name, new FormControl(value));
    });

    this.form.valueChanges.pipe(distinctUntilChanged()).subscribe((sectionData) => {
      this.sectionDataUpdate.emit({
        ...this.sectionData, 
        [this.sectionId]: sectionData
      });
    })
  }

  getControl(name: string): FormControl{
    return this.form?.get(name) as FormControl;
  }

  getSubSectionData(){
    return this.sectionData[this.sectionId] || {};
  }

  updateSectionData(sectionData:any){
    this.sectionDataUpdate.emit({
      ...this.sectionData, 
      [this.sectionId]: sectionData
    });
  }
}
