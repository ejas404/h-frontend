import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BargraphChartReusableComponent } from './bargraph-chart-reusable.component';

describe('BargraphChartReusableComponent', () => {
  let component: BargraphChartReusableComponent;
  let fixture: ComponentFixture<BargraphChartReusableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BargraphChartReusableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BargraphChartReusableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
