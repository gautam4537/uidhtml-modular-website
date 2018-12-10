import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentExamplesComponent } from './recent-examples.component';

describe('RecentExamplesComponent', () => {
  let component: RecentExamplesComponent;
  let fixture: ComponentFixture<RecentExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
