import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnotfoundComponent } from './snotfound.component';

describe('SnotfoundComponent', () => {
  let component: SnotfoundComponent;
  let fixture: ComponentFixture<SnotfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SnotfoundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SnotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
