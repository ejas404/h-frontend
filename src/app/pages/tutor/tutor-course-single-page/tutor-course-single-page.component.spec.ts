import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorCourseSinglePageComponent } from './tutor-course-single-page.component';

describe('TutorCourseSinglePageComponent', () => {
  let component: TutorCourseSinglePageComponent;
  let fixture: ComponentFixture<TutorCourseSinglePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TutorCourseSinglePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TutorCourseSinglePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
