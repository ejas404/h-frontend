import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutBoxComponent } from './checkout-box.component';

describe('CheckoutBoxComponent', () => {
  let component: CheckoutBoxComponent;
  let fixture: ComponentFixture<CheckoutBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckoutBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckoutBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
