import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamaraoFichaComponent } from './camarao-ficha.component';

describe('CamaraoFichaComponent', () => {
  let component: CamaraoFichaComponent;
  let fixture: ComponentFixture<CamaraoFichaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CamaraoFichaComponent]
    });
    fixture = TestBed.createComponent(CamaraoFichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
