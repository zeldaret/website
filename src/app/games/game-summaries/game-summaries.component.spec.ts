import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSummariesComponent } from './game-summaries.component';

describe('GameSummariesComponent', () => {
  let component: GameSummariesComponent;
  let fixture: ComponentFixture<GameSummariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameSummariesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameSummariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
