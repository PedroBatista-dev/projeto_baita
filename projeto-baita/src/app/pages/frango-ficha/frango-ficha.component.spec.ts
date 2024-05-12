import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrangoFichaComponent } from './frango-ficha.component';

describe('FrangoFichaComponent', () => {
  let component: FrangoFichaComponent;
  let fixture: ComponentFixture<FrangoFichaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrangoFichaComponent]
    });
    fixture = TestBed.createComponent(FrangoFichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
