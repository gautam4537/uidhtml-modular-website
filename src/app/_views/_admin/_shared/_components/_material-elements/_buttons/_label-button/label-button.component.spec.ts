import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelButtonComponent } from './label-button.component';

describe('LabelButtonComponent', () => {
  let component: LabelButtonComponent;
  let fixture: ComponentFixture<LabelButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
