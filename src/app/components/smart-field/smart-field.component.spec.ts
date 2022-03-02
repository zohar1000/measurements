import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartFieldComponent } from './smart-field.component';

describe('SmartFieldComponent', () => {
  let component: SmartFieldComponent;
  let fixture: ComponentFixture<SmartFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
