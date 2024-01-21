import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseTopFilterBtnsComponent } from './course-top-filter-btns.component';

describe('CourseTopFilterBtnsComponent', () => {
  let component: CourseTopFilterBtnsComponent;
  let fixture: ComponentFixture<CourseTopFilterBtnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseTopFilterBtnsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseTopFilterBtnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
