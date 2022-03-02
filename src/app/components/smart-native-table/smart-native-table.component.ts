import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormConfig } from '../../shared/models/form-config.model';

@Component({
  selector: 'app-smart-native-table',
  templateUrl: './smart-native-table.component.html',
  styleUrls: ['./smart-native-table.component.scss']
})
export class SmartNativeTableComponent implements OnInit {
  @Input() get data() {
    return this._data;
  } set data(value) {
    this._data = value;
    console.log('data:', value);
    this.addedRow = {};
    this.clearEditState();
  }
  @Input() rowFormConfig: FormConfig;
  @Output() rowAdded = new EventEmitter();
  @Output() rowEdited = new EventEmitter();
  private _data;
  editedRowRef = null;
  isFormDisabled = false;
  addedRow: any = {};
  fgAdd: FormGroup;
  fgEdit: FormGroup;
  fieldNames: string[];
  fieldConfigs = {};

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fieldNames = this.rowFormConfig.fields.map(field => field.attributes.name);
    this.rowFormConfig.fields.forEach(field => this.fieldConfigs[field.attributes.name] = field);
    this.fgAdd = this.getInitialFormGroup();
    this.fgEdit = this.getInitialFormGroup();
  }

  onInputAdd(key, e) {
    this.addedRow[key] = Number(e.target.value);
  }

  onRowAdded(value) {
    this.isFormDisabled = true;
    this.rowAdded.emit(value);
  }

  onStartEditRow(row) {
    this.editedRowRef = row;
  }

  onRowUpdated(event) {
    this.isFormDisabled = true;
    this.rowEdited.emit({ ...event, editedRowRef: this.editedRowRef });
  }

  onRowCanceled() {
    this.clearEditState();
  }

  clearEditState() {
    this.editedRowRef = null;
    this.isFormDisabled = false;
    if (this.fgAdd) this.fgAdd.reset();
  }

  getInitialFormGroup() {
    const controls = {};
    this.rowFormConfig.fields.forEach(field => {
      controls[field.attributes.name] = new FormControl('', field.validations || []);
    });
    return this.fb.group(controls);
  }
}
