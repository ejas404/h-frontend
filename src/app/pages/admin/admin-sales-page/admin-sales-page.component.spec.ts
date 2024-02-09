import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSalesPageComponent } from './admin-sales-page.component';

describe('AdminSalesPageComponent', () => {
  let component: AdminSalesPageComponent;
  let fixture: ComponentFixture<AdminSalesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminSalesPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminSalesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
