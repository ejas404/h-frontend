import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeBuyComponent } from './free-buy.component';

describe('FreeBuyComponent', () => {
  let component: FreeBuyComponent;
  let fixture: ComponentFixture<FreeBuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreeBuyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FreeBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
