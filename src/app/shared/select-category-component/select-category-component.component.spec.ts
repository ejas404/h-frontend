import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCategoryComponentComponent } from './select-category-component.component';

describe('SelectCategoryComponentComponent', () => {
  let component: SelectCategoryComponentComponent;
  let fixture: ComponentFixture<SelectCategoryComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectCategoryComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectCategoryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
