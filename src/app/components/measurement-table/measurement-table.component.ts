import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-measurement-table',
  templateUrl: './measurement-table.component.html',
  styleUrls: ['./measurement-table.component.scss']
})
export class MeasurementTableComponent {
  @Input() get data() {
    return this._data;
  } set data(value) {
    this._data = value;
    console.log('data:', value);
    this.addedRow = {};
    this.clearEditState();

  }
  @Output() rowAdded = new EventEmitter();
  @Output() rowEdited = new EventEmitter();
  private _data;
  editedRowId = '';
  editedRowValue;
  isFormDisabled = false;
  addedRow: any = {};

  onInputAdd(key, e) {
    this.addedRow[key] = Number(e.target.value);
  }

  onClickAdd() {
    this.isFormDisabled = true;
    const message = `add: ${JSON.stringify(this.addedRow)}`;
    console.log(message);
    alert(message);
    this.rowAdded.emit(this.addedRow);
  }

  onClickEdit(row) {
    this.editedRowId = row.time;
    this.editedRowValue = { ...row };
  }

  onInput(key, e) {
    this.editedRowValue[key] = Number(e.target.value);
  }

  onClickSave() {
    this.isFormDisabled = true;
    const message = `update for time ${this.editedRowValue.time}: ${JSON.stringify(this.editedRowValue)}`;
    console.log(message);
    alert(message);
    this.rowEdited.emit(this.editedRowValue);
  }

  onClickCancel() {
    this.clearEditState();
  }

  clearEditState() {
    this.editedRowId = '';
    this.editedRowValue = null;
    this.isFormDisabled = false;
    this.addedRow = {};
  }
}
