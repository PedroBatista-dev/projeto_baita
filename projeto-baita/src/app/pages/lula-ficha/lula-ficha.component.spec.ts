import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LulaFichaComponent } from './lula-ficha.component';

describe('LulaFichaComponent', () => {
  let component: LulaFichaComponent;
  let fixture: ComponentFixture<LulaFichaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LulaFichaComponent]
    });
    fixture = TestBed.createComponent(LulaFichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
