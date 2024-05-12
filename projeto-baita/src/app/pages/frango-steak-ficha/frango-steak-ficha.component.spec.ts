import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrangoSteakFichaComponent } from './frango-steak-ficha.component';

describe('FrangoSteakFichaComponent', () => {
  let component: FrangoSteakFichaComponent;
  let fixture: ComponentFixture<FrangoSteakFichaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrangoSteakFichaComponent]
    });
    fixture = TestBed.createComponent(FrangoSteakFichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
