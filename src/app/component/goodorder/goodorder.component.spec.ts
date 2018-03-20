import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodorderComponent } from './goodorder.component';

describe('GoodorderComponent', () => {
  let component: GoodorderComponent;
  let fixture: ComponentFixture<GoodorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
