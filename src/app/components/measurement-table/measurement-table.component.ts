import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-measurement-table',
  templateUrl: './measurement-table.component.html',
  styleUrls: ['./measurement-table.component.scss']
})
export class MeasurementTableComponent implements OnInit {
  measurementTable: FormGroup;
  rowsControl: FormArray;
  data = [
    { patient: 1, pulse: 90, pressure: 100 },
    { patient: 2, pulse: 70, pressure: 80 },
  ];
  editableRowId = '';
  editableRowValue;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.measurementTable = this.fb.group({
      rows: this.fb.array()
    });
    this.rowsControl = this.measurementTable.get('rows') as FormArray;
  }

  onClickEdit(row: AbstractControl) {
    this.editableRowId = row.value.patient;
    this.editableRowValue = { ...row.value };
  }

  onInput(key, e) {
    this.editableRowValue[key] = Number(e.target.value);
  }

  onClickSave() {
    const message = `update for patient ${this.editableRowValue.patient}: ${JSON.stringify(this.editableRowValue)}`;
    console.log(message);
    alert(message);
    const ix = this.data.findIndex(item => item.patient === this.editableRowValue.patient);
    this.data[ix] = { ...this.editableRowValue };
    this.clearEditState();
    setTimeout(() => {
      this.rowsControl.setValue(this.data);
    });
  }

  onClickCancel() {
    this.clearEditState();
  }

  clearEditState() {
    this.editableRowId = '';
    this.editableRowValue = null;
  }
}
