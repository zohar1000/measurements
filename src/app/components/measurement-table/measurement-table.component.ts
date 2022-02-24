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
  editedRow;
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
    this.editedRow = { ...row };
  }

  onInput(key, e) {
    this.editedRow[key] = Number(e.target.value);
  }

  onClickSave(row) {
    this.isFormDisabled = true;
    const message = `update for time ${this.editedRow.time}: ${JSON.stringify(this.editedRow)}`;
    console.log(message);
    alert(message);
    this.rowEdited.emit({ row, editedRow: this.editedRow });
  }

  onClickCancel() {
    this.clearEditState();
  }

  clearEditState() {
    this.editedRowId = '';
    this.editedRow = null;
    this.isFormDisabled = false;
    this.addedRow = {};
  }
}
