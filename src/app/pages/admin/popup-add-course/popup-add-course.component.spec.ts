import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupAddCourseComponent } from './popup-add-course.component';

describe('PopupAddCourseComponent', () => {
  let component: PopupAddCourseComponent;
  let fixture: ComponentFixture<PopupAddCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopupAddCourseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopupAddCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
