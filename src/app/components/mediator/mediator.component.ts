import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mediator',
  templateUrl: './mediator.component.html',
  styleUrls: ['./mediator.component.scss']
})
export class MediatorComponent implements OnInit {
  @Input() FormConfig;
  @Input() isDisplay;

  constructor() { }

  ngOnInit(): void {
  }

}
