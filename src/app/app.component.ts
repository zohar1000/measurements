import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormConfig } from './shared/models/form-config.model';
import { InputType } from './shared/enums/input-type.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data = [
    { time: '2022-02-02 10:00:00', pulse: 70, pressure: 80 },
    { time: '2022-01-01 10:00:00', pulse: 90, pressure: 100 },
  ];
  rowFormConfig: FormConfig = {
    fields: [
    { attributes: { name: 'time' }, inputType: InputType.Date },
    { attributes: { name: 'pulse' }, inputType: InputType.Number, validations: [Validators.required] },
    { attributes: { name: 'pressure' }, inputType: InputType.Number }
  ]};

  onRowAdded(addedRowValue) {
    this.data.unshift({ time: this.getUnitTime(), ...addedRowValue });
    setTimeout(() => {
      this.data = [ ...this.data ];
    });
  }

  onRowEdited({ row, editedRow }) {
    const ix = this.data.findIndex(item => item === row);
    setTimeout(() => {
      this.data[ix] = { ...editedRow };
      this.data = [ ...this.data ];
    });
  }

  getUnitTime() {
    return (new Date()).toISOString().replace('T', ' ').substr(0, 19);
  }
}
