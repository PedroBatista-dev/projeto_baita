import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorkitosFotoComponent } from './porkitos-foto.component';

describe('PorkitosFotoComponent', () => {
  let component: PorkitosFotoComponent;
  let fixture: ComponentFixture<PorkitosFotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PorkitosFotoComponent]
    });
    fixture = TestBed.createComponent(PorkitosFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
