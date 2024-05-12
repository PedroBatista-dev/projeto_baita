import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorkitosFichaComponent } from './porkitos-ficha.component';

describe('PorkitosFichaComponent', () => {
  let component: PorkitosFichaComponent;
  let fixture: ComponentFixture<PorkitosFichaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PorkitosFichaComponent]
    });
    fixture = TestBed.createComponent(PorkitosFichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
