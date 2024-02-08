import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwofactorAuthComponent } from './twofactor-auth.component';

describe('TwofactorAuthComponent', () => {
  let component: TwofactorAuthComponent;
  let fixture: ComponentFixture<TwofactorAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TwofactorAuthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TwofactorAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
