import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorProfilePageComponent } from './tutor-profile-page.component';

describe('TutorProfilePageComponent', () => {
  let component: TutorProfilePageComponent;
  let fixture: ComponentFixture<TutorProfilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TutorProfilePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TutorProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
