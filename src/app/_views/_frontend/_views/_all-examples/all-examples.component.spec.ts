import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllExamplesComponent } from './all-examples.component';

describe('AllExamplesComponent', () => {
  let component: AllExamplesComponent;
  let fixture: ComponentFixture<AllExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
