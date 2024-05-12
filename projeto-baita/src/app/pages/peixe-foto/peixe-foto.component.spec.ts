import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeixeFotoComponent } from './peixe-foto.component';

describe('PeixeFotoComponent', () => {
  let component: PeixeFotoComponent;
  let fixture: ComponentFixture<PeixeFotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeixeFotoComponent]
    });
    fixture = TestBed.createComponent(PeixeFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
