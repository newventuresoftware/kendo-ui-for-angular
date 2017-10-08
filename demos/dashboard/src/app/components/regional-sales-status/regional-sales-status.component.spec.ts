import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionalSalesStatusComponent } from './regional-sales-status.component';

describe('RegionalSalesStatusComponent', () => {
  let component: RegionalSalesStatusComponent;
  let fixture: ComponentFixture<RegionalSalesStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionalSalesStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionalSalesStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
