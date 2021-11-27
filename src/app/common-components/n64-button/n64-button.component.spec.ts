import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N64ButtonComponent } from './n64-button.component';

describe('N64ButtonComponent', () => {
  let component: N64ButtonComponent;
  let fixture: ComponentFixture<N64ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N64ButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(N64ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
