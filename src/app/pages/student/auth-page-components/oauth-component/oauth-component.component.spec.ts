import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OauthComponentComponent } from './oauth-component.component';

describe('OauthComponentComponent', () => {
  let component: OauthComponentComponent;
  let fixture: ComponentFixture<OauthComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OauthComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OauthComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
