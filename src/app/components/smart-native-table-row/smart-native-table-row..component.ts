import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormConfig } from '../../shared/models/form-config.model';
import { FieldMode } from '../../shared/enums/field-mode.enum';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tr[app-smart-native-table-row]',
  templateUrl: './smart-native-table-row.component.html',
  styleUrls: ['./smart-native-table-row..component.scss']
})
export class SmartNativeTableRowComponent {
  @Input() data;
  @Input() fgEdit: FormGroup;
  @Input() config: FormConfig;
  @Input() editedRowRef;
  @Input() fieldNames: string[];
  @Input() fieldConfigs;
  @Output() rowAdded = new EventEmitter();
  @Output() startEditRow = new EventEmitter();
  @Output() rowUpdated = new EventEmitter();
  @Output() rowCanceled = new EventEmitter();
  FieldMode = FieldMode;

  onClickEdit(row) {
    this.fieldNames.map(name => {
      const formControl = this.fgEdit.get(name);
      formControl.setValue(row[name]);
console.log('this.fieldConfigs[name].validations:', this.fieldConfigs[name].validations);
      if (this.fieldConfigs[name].validations) formControl.setValidators(this.fieldConfigs[name].validations);
    });
    this.startEditRow.emit(row);
  }

  onClickSave() {
    const message = `update row to: ${JSON.stringify(this.fgEdit.value)}`;
    console.log(message);
    alert(message);
    this.rowUpdated.emit({ value: this.fgEdit.value });
  }

  onClickCancel() {
    this.rowCanceled.emit();
  }
}
