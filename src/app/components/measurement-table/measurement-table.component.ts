import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormConfig } from '../../shared/models/form-config.model';

@Component({
  selector: 'app-measurement-table',
  templateUrl: './measurement-table.component.html',
  styleUrls: ['./measurement-table.component.scss']
})
export class MeasurementTableComponent implements OnInit {
  @Input() get data() {
    return this._data;
  } set data(value) {
    this._data = value;
    console.log('data:', value);
    this.addedRow = {};
    this.clearEditState();
  }
  @Input() itemConfig: FormConfig;
  @Output() rowAdded = new EventEmitter();
  @Output() rowEdited = new EventEmitter();
  private _data;
  editedRowRef = null;
  // editedRow;
  isFormDisabled = false;
  addedRow: any = {};
  fgAdd: FormGroup;
  fgEdit: FormGroup;
  fieldNames: string[];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fieldNames = this.itemConfig.fields.map(control => control.name);
    this.fgAdd = this.getInitialFormGroup();
    this.fgEdit = this.getInitialFormGroup();
console.log('this.fgEdit:', this.fgEdit);
  }

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

  onStartEditRow(row) {
    this.editedRowRef = row;
  }

  onRowUpdated(data) {
    this.isFormDisabled = true;
    this.rowEdited.emit(data);
  }

  onRowCanceled() {
    this.clearEditState();
  }

  clearEditState() {
    this.editedRowRef = null;
    this.isFormDisabled = false;
    // this.addedRow = {};
  }

  getInitialFormGroup() {
    const controls = {};
    this.itemConfig.fields.forEach(control => {
      controls[control.name] = new FormControl('', control.validations || []);
    });
    return this.fb.group(controls);
  }
}
