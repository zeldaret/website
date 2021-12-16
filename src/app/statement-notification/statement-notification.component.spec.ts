import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatementNotificationComponent } from './statement-notification.component';

describe('StatementNotificationComponent', () => {
  let component: StatementNotificationComponent;
  let fixture: ComponentFixture<StatementNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatementNotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatementNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
