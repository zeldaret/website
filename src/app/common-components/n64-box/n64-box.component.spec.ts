import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N64BoxComponent } from './n64-box.component';

describe('N64BoxComponent', () => {
  let component: N64BoxComponent;
  let fixture: ComponentFixture<N64BoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N64BoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(N64BoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
