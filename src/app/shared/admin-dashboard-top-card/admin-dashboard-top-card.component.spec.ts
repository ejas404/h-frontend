import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardTopCardComponent } from './admin-dashboard-top-card.component';

describe('AdminDashboardTopCardComponent', () => {
  let component: AdminDashboardTopCardComponent;
  let fixture: ComponentFixture<AdminDashboardTopCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminDashboardTopCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminDashboardTopCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
