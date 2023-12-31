import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorNotificationComponent } from './tutor-notification.component';

describe('TutorNotificationComponent', () => {
  let component: TutorNotificationComponent;
  let fixture: ComponentFixture<TutorNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TutorNotificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TutorNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
