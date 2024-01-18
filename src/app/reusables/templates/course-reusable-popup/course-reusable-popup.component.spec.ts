import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseReusablePopupComponent } from './course-reusable-popup.component';

describe('CourseReusablePopupComponent', () => {
  let component: CourseReusablePopupComponent;
  let fixture: ComponentFixture<CourseReusablePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseReusablePopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseReusablePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
