import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFieldHostComponent } from './dynamic-field-host.component';

describe('DynamicFieldHostComponent', () => {
  let component: DynamicFieldHostComponent;
  let fixture: ComponentFixture<DynamicFieldHostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicFieldHostComponent]
    });
    fixture = TestBed.createComponent(DynamicFieldHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
