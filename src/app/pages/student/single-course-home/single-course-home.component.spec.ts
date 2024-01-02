import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCourseHomeComponent } from './single-course-home.component';

describe('SingleCourseHomeComponent', () => {
  let component: SingleCourseHomeComponent;
  let fixture: ComponentFixture<SingleCourseHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingleCourseHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleCourseHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
