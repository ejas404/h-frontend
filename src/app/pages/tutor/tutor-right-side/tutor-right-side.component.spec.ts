import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorRightSideComponent } from './tutor-right-side.component';

describe('TutorRightSideComponent', () => {
  let component: TutorRightSideComponent;
  let fixture: ComponentFixture<TutorRightSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TutorRightSideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TutorRightSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
