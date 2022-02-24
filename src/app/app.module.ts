import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeasurementTableComponent } from './components/measurement-table/measurement-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MeasurementTableFormArrayComponent } from './components/measurement-table-form-array/measurement-table-form-array.component';

@NgModule({
  declarations: [
    AppComponent,
    MeasurementTableComponent,
    MeasurementTableFormArrayComponent
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
