import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-smart-form',
  templateUrl: './smart-form.component.html',
  styleUrls: ['./smart-form.component.scss']
})
export class SmartFormComponent implements OnInit {
  @Input() FormConfig;
  @Input() isDisplay;

  constructor() { }

  ngOnInit(): void {
  }

}
