import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeasurementTableComponent } from './components/measurement-table/measurement-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MeasurementTableFormArrayComponent } from './components/measurement-table-form-array/measurement-table-form-array.component';
import { SmartFormComponent } from './components/smart-form/smart-form.component';
import { MediatorComponent } from './components/mediator/mediator.component';

@NgModule({
  declarations: [
    AppComponent,
    MeasurementTableComponent,
    MeasurementTableFormArrayComponent,
    SmartFormComponent,
    MediatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
