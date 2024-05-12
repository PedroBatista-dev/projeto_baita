import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrangoCheddarFotoComponent } from './frango-cheddar-foto.component';

describe('FrangoCheddarFotoComponent', () => {
  let component: FrangoCheddarFotoComponent;
  let fixture: ComponentFixture<FrangoCheddarFotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrangoCheddarFotoComponent]
    });
    fixture = TestBed.createComponent(FrangoCheddarFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
