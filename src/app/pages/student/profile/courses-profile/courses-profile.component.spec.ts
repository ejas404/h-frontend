import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesProfileComponent } from './courses-profile.component';

describe('CoursesProfileComponent', () => {
  let component: CoursesProfileComponent;
  let fixture: ComponentFixture<CoursesProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursesProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoursesProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
