import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupEditCourseComponent } from './popup-edit-course.component';

describe('PopupEditCourseComponent', () => {
  let component: PopupEditCourseComponent;
  let fixture: ComponentFixture<PopupEditCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopupEditCourseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopupEditCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
