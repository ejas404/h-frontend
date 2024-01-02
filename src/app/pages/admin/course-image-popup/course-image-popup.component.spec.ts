import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseImagePopupComponent } from './course-image-popup.component';

describe('CourseImagePopupComponent', () => {
  let component: CourseImagePopupComponent;
  let fixture: ComponentFixture<CourseImagePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseImagePopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseImagePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
