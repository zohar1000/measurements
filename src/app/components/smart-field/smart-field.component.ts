import { Component, Input, OnInit } from '@angular/core';
import { FieldConfig } from '../../shared/models/field-config.model';
import { InputType } from '../../shared/enums/input-type.enum';
import { FieldMode } from '../../shared/enums/field-mode.enum';
import { FormGroup } from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'td[app-smart-field], div[app-smart-field], span[app-smart-field]',
  templateUrl: './smart-field.component.html',
  styleUrls: ['./smart-field.component.scss']
})
export class SmartFieldComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Input() config: FieldConfig;
  @Input() data;
  @Input() fieldMode: FieldMode;
  @Input() inputType: InputType;
  InputType = InputType;

  ngOnInit(): void {
    console.log('smart field:', this.fieldMode, ', formGroup:', this.formGroup);
  }

}
