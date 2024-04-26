import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrangoSteakComponent } from './frango-steak.component';

describe('FrangoSteakComponent', () => {
  let component: FrangoSteakComponent;
  let fixture: ComponentFixture<FrangoSteakComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrangoSteakComponent]
    });
    fixture = TestBed.createComponent(FrangoSteakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
