import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartReusableComponent } from './pie-chart-reusable.component';

describe('PieChartReusableComponent', () => {
  let component: PieChartReusableComponent;
  let fixture: ComponentFixture<PieChartReusableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PieChartReusableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PieChartReusableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
