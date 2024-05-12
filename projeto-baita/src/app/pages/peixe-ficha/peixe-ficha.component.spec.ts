import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeixeFichaComponent } from './peixe-ficha.component';

describe('PeixeFichaComponent', () => {
  let component: PeixeFichaComponent;
  let fixture: ComponentFixture<PeixeFichaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeixeFichaComponent]
    });
    fixture = TestBed.createComponent(PeixeFichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
