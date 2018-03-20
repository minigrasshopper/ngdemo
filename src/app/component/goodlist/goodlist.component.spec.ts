import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodlistComponent } from './goodlist.component';

describe('GoodlistComponent', () => {
  let component: GoodlistComponent;
  let fixture: ComponentFixture<GoodlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
