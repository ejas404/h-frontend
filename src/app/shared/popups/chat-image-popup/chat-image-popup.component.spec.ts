import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatImagePopupComponent } from './chat-image-popup.component';

describe('ChatImagePopupComponent', () => {
  let component: ChatImagePopupComponent;
  let fixture: ComponentFixture<ChatImagePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChatImagePopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChatImagePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
