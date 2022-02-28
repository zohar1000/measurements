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
  @Input() itemConfig: FormConfig[];
  @Output() rowAdded = new EventEmitter();
  @Output() rowEdited = new EventEmitter();
  private _data;
  editedRowRef = null;
  editedRow;
  isFormDisabled = false;
  addedRow: any = {};
  fgAdd: FormGroup;
  fgEdit: FormGroup;
  names: string[];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.names = this.itemConfig.map(control => control.name);
    this.fgAdd = this.getInitialFormGroup();
    this.fgEdit = this.getInitialFormGroup();
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

  onClickEdit(row) {
    this.editedRowRef = row;
    this.editedRow = { ...row };
    this.names.map(name => {
      this.fgEdit.get(name).setValue(this.editedRow[name]);
    });
  }

  onInput(key, e) {
    this.editedRow[key] = e.target.value === '' ? '' : Number(e.target.value);
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
    this.editedRowRef = null;
    this.editedRow = null;
    this.isFormDisabled = false;
    this.addedRow = {};
  }

  getInitialFormGroup() {
    const controls = {};
    this.itemConfig.forEach(control => {
      controls[control.name] = new FormControl('', control.validations || []);
    });
    return this.fb.group(controls);
  }
}
