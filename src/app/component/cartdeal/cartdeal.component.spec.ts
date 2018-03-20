import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartdealComponent } from './cartdeal.component';

describe('CartdealComponent', () => {
  let component: CartdealComponent;
  let fixture: ComponentFixture<CartdealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartdealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartdealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
