import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldMode } from 'src/app/shared/enums/field-mode.enum';
import { FieldConfig } from '../../shared/models/field-config.model';

@Component({
  selector: 'app-smart-date',
  templateUrl: './smart-date.component.html',
  styleUrls: ['./smart-date.component.scss']
})
export class SmartDateComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Input() config: FieldConfig;
  @Input() data;
  @Input() fieldMode: FieldMode;
  FieldMode = FieldMode;

  constructor() { }

  ngOnInit(): void {
  }

}
