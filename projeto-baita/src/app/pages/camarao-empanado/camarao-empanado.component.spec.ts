import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamaraoEmpanadoComponent } from './camarao-empanado.component';

describe('CamaraoEmpanadoComponent', () => {
  let component: CamaraoEmpanadoComponent;
  let fixture: ComponentFixture<CamaraoEmpanadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CamaraoEmpanadoComponent]
    });
    fixture = TestBed.createComponent(CamaraoEmpanadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
