import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVideoPreviewComponent } from './admin-video-preview.component';

describe('AdminVideoPreviewComponent', () => {
  let component: AdminVideoPreviewComponent;
  let fixture: ComponentFixture<AdminVideoPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminVideoPreviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminVideoPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
