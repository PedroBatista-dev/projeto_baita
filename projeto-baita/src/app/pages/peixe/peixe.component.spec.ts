import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeixeComponent } from './peixe.component';

describe('PeixeComponent', () => {
  let component: PeixeComponent;
  let fixture: ComponentFixture<PeixeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeixeComponent]
    });
    fixture = TestBed.createComponent(PeixeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
