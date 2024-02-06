import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatboxSharedComponent } from './chatbox-shared.component';

describe('ChatboxSharedComponent', () => {
  let component: ChatboxSharedComponent;
  let fixture: ComponentFixture<ChatboxSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChatboxSharedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChatboxSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
