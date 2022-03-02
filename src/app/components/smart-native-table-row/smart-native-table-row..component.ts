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
  editedRow;

  onClickEdit(row) {
    this.editedRow = { ...row };
    this.fieldNames.map(name => {
      this.fgEdit.get(name).setValue(this.editedRow[name]);
    });
    this.startEditRow.emit(row);
  }

  onInput(key, e) {
    this.editedRow[key] = e.target.value === '' ? '' : Number(e.target.value);
  }

  onClickSave(row) {
    const message = `update row to: ${JSON.stringify(this.fgEdit.value)}`;
    console.log(message);
    alert(message);
    this.rowUpdated.emit({ row, editedRow: this.fgEdit.value });
  }

  onClickCancel() {
    this.editedRow = null;
    this.rowCanceled.emit();
  }
}
