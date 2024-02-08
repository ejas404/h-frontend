import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCourseTutorComponent } from './single-course-tutor.component';

describe('SingleCourseTutorComponent', () => {
  let component: SingleCourseTutorComponent;
  let fixture: ComponentFixture<SingleCourseTutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingleCourseTutorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleCourseTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
