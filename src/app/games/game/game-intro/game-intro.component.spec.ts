import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameIntroComponent } from './game-intro.component';

describe('GameIntroComponent', () => {
  let component: GameIntroComponent;
  let fixture: ComponentFixture<GameIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
