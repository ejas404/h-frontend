import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorPopupComponent } from './tutor-popup.component';

describe('TutorPopupComponent', () => {
  let component: TutorPopupComponent;
  let fixture: ComponentFixture<TutorPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TutorPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TutorPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
