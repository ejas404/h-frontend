import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCourseAdminComponent } from './single-course-admin.component';

describe('SingleCourseAdminComponent', () => {
  let component: SingleCourseAdminComponent;
  let fixture: ComponentFixture<SingleCourseAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingleCourseAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleCourseAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
