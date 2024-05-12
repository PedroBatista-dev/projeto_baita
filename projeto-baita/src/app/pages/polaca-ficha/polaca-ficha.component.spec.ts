import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolacaFichaComponent } from './polaca-ficha.component';

describe('PolacaFichaComponent', () => {
  let component: PolacaFichaComponent;
  let fixture: ComponentFixture<PolacaFichaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PolacaFichaComponent]
    });
    fixture = TestBed.createComponent(PolacaFichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
