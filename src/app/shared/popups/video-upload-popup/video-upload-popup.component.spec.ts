import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoUploadPopupComponent } from './video-upload-popup.component';

describe('VideoUploadPopupComponent', () => {
  let component: VideoUploadPopupComponent;
  let fixture: ComponentFixture<VideoUploadPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VideoUploadPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VideoUploadPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
