import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameChartComponent } from './game-chart.component';

describe('GameChartComponent', () => {
  let component: GameChartComponent;
  let fixture: ComponentFixture<GameChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
