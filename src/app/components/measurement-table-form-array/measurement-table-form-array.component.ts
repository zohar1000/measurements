import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-measurement-table-form-array',
  templateUrl: './measurement-table-form-array.component.html',
  styleUrls: ['./measurement-table-form-array.component.scss']
})
export class MeasurementTableFormArrayComponent implements OnInit {
  @Input() get data() {
    return this._data;
  } set data(value) {
    this._data = value;
    this.clearEditState();
    console.log('data @Inout():', value);
    console.log('this.rowsControl:', this.rowsControl);
    if (this.rowsControl) this.rowsControl.setValue(this.data);
  }
  @Output() dataChanged = new EventEmitter();
  private _data;
  measurementTable: FormGroup;
  rowsControl: FormArray;
  editableRowId = '';
  editableRowValue;
  isFormDisabled = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.measurementTable = this.fb.group({
      rows: this.fb.array(this.data)
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
    this.isFormDisabled = true;
    const message = `update for patient ${this.editableRowValue.patient}: ${JSON.stringify(this.editableRowValue)}`;
    console.log(message);
    alert(message);
    this.isFormDisabled = true;
    this.dataChanged.emit(this.editableRowValue);
    // const ix = this.data.findIndex(item => item.patient === this.editableRowValue.patient);
    // this.data[ix] = { ...this.editableRowValue };
    // this.clearEditState();
    // setTimeout(() => {
    //   this.rowsControl.setValue(this.data);
    // });
  }

  onClickCancel() {
    this.clearEditState();
  }

  clearEditState() {
    this.editableRowId = '';
    this.editableRowValue = null;
    this.isFormDisabled = false;
  }

}
