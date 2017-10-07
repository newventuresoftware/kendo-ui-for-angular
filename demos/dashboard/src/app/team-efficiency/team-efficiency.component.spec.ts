import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamEfficiencyComponent } from './team-efficiency.component';

describe('TeamEfficiencyComponent', () => {
  let component: TeamEfficiencyComponent;
  let fixture: ComponentFixture<TeamEfficiencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamEfficiencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamEfficiencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
