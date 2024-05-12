import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LulaFotoComponent } from './lula-foto.component';

describe('LulaFotoComponent', () => {
  let component: LulaFotoComponent;
  let fixture: ComponentFixture<LulaFotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LulaFotoComponent]
    });
    fixture = TestBed.createComponent(LulaFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
