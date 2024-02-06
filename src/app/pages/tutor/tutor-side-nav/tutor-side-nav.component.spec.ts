import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorSideNavComponent } from './tutor-side-nav.component';

describe('TutorSideNavComponent', () => {
  let component: TutorSideNavComponent;
  let fixture: ComponentFixture<TutorSideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TutorSideNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TutorSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
