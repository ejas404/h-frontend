import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessFailTemplateComponent } from './success-fail-template.component';

describe('SuccessFailTemplateComponent', () => {
  let component: SuccessFailTemplateComponent;
  let fixture: ComponentFixture<SuccessFailTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuccessFailTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuccessFailTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
