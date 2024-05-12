import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrangoApimentadoFichaComponent } from './frango-apimentado-ficha.component';

describe('FrangoApimentadoFichaComponent', () => {
  let component: FrangoApimentadoFichaComponent;
  let fixture: ComponentFixture<FrangoApimentadoFichaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrangoApimentadoFichaComponent]
    });
    fixture = TestBed.createComponent(FrangoApimentadoFichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
