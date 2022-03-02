import { Component, Input, OnInit } from '@angular/core';
import { FieldMode } from 'src/app/shared/enums/field-mode.enum';
import { FieldConfig } from '../../shared/models/field-config.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-smart-input',
  templateUrl: './smart-input.component.html',
  styleUrls: ['./smart-input.component.scss']
})
export class SmartInputComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Input() config: FieldConfig;
  @Input() data;
  @Input() fieldMode: FieldMode;
  FieldMode = FieldMode;

  constructor() { }

  ngOnInit(): void {
  }

}
