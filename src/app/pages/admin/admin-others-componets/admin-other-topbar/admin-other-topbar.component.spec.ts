import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOtherTopbarComponent } from './admin-other-topbar.component';

describe('AdminOtherTopbarComponent', () => {
  let component: AdminOtherTopbarComponent;
  let fixture: ComponentFixture<AdminOtherTopbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminOtherTopbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminOtherTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
