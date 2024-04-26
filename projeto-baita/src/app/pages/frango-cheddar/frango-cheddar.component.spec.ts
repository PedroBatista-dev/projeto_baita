import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrangoCheddarComponent } from './frango-cheddar.component';

describe('FrangoCheddarComponent', () => {
  let component: FrangoCheddarComponent;
  let fixture: ComponentFixture<FrangoCheddarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrangoCheddarComponent]
    });
    fixture = TestBed.createComponent(FrangoCheddarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
