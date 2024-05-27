import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionDataComponent } from './question-data.component';

describe('QuestionDataComponent', () => {
  let component: QuestionDataComponent;
  let fixture: ComponentFixture<QuestionDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionDataComponent]
    });
    fixture = TestBed.createComponent(QuestionDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
