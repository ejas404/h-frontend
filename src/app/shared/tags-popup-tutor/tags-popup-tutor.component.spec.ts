import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsPopupTutorComponent } from './tags-popup-tutor.component';

describe('TagsPopupTutorComponent', () => {
  let component: TagsPopupTutorComponent;
  let fixture: ComponentFixture<TagsPopupTutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TagsPopupTutorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TagsPopupTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
