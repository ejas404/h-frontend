import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorEducationComponent } from './tutor-education.component';

describe('TutorEducationComponent', () => {
  let component: TutorEducationComponent;
  let fixture: ComponentFixture<TutorEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TutorEducationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TutorEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
