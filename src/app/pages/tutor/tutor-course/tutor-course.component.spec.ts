import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorCourseComponent } from './tutor-course.component';

describe('TutorCourseComponent', () => {
  let component: TutorCourseComponent;
  let fixture: ComponentFixture<TutorCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TutorCourseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TutorCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
