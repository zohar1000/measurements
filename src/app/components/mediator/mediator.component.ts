import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormConfig } from '../../shared/models/form-config.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tr[app-mediator]',
  templateUrl: './mediator.component.html',
  styleUrls: ['./mediator.component.scss']
})
export class MediatorComponent {
  @Input() row;
  @Input() fgEdit: FormGroup;
  @Input() isDisplay = true;
  @Input() isEdit = false;
  @Input() config: FormConfig;
  @Input() editedRowRef;
  @Output() rowAdded = new EventEmitter();
  @Output() startEditRow = new EventEmitter();
  @Output() rowUpdated = new EventEmitter();
  @Output() rowCanceled = new EventEmitter();
  @Input() fieldNames: string[];
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
    const message = `update for time ${this.editedRow.time}: ${JSON.stringify(this.editedRow)}`;
    console.log(message);
    alert(message);
    this.rowUpdated.emit({ row, editedRow: this.editedRow });
  }

  onClickCancel() {
    this.editedRow = null;
    this.rowCanceled.emit();
  }
}
