import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationProfileComponent } from './notification-profile.component';

describe('NotificationProfileComponent', () => {
  let component: NotificationProfileComponent;
  let fixture: ComponentFixture<NotificationProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotificationProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotificationProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
