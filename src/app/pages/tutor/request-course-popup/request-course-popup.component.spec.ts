import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestCoursePopupComponent } from './request-course-popup.component';

describe('RequestCoursePopupComponent', () => {
  let component: RequestCoursePopupComponent;
  let fixture: ComponentFixture<RequestCoursePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RequestCoursePopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequestCoursePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
