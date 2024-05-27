import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './containers/admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuestionDataComponent } from './containers/question-data/question-data.component';
import { DynamicFieldHostComponent } from './containers/dynamic-field-host/dynamic-field-host.component';
import { FieldDirective } from './containers/field.directive';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    QuestionDataComponent,
    DynamicFieldHostComponent,
    FieldDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
