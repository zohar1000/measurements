import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SmartFieldComponent } from './components/smart-field/smart-field.component';
import { SmartInputComponent } from './components/smart-input/smart-input.component';
import { SmartNativeTableComponent } from './components/smart-native-table/smart-native-table.component';
import { SmartNativeTableRowComponent } from './components/smart-native-table-row/smart-native-table-row..component';
import { SmartDateComponent } from './components/smart-date/smart-date.component';
import { BsDatepickerConfig, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertConfig } from 'ngx-bootstrap/alert';

@NgModule({
  declarations: [
    AppComponent,
    SmartNativeTableComponent,
    SmartNativeTableRowComponent,
    SmartFieldComponent,
    SmartInputComponent,
    SmartDateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
  ],
  providers: [AlertConfig, BsDatepickerConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
