import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentVideoPreviewComponent } from './student-video-preview.component';

describe('StudentVideoPreviewComponent', () => {
  let component: StudentVideoPreviewComponent;
  let fixture: ComponentFixture<StudentVideoPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentVideoPreviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentVideoPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
