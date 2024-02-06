import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallCourseListComponent } from './small-course-list.component';

describe('SmallCourseListComponent', () => {
  let component: SmallCourseListComponent;
  let fixture: ComponentFixture<SmallCourseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmallCourseListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SmallCourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
