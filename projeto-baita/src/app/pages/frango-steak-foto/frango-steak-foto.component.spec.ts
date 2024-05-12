import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrangoSteakFotoComponent } from './frango-steak-foto.component';

describe('FrangoSteakFotoComponent', () => {
  let component: FrangoSteakFotoComponent;
  let fixture: ComponentFixture<FrangoSteakFotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrangoSteakFotoComponent]
    });
    fixture = TestBed.createComponent(FrangoSteakFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
