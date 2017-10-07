import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsAndOrdersComponent } from './products-and-orders.component';

describe('ProductsAndOrdersComponent', () => {
  let component: ProductsAndOrdersComponent;
  let fixture: ComponentFixture<ProductsAndOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsAndOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsAndOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
