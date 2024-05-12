import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrangoVegetaisFichaComponent } from './frango-vegetais-ficha.component';

describe('FrangoVegetaisFichaComponent', () => {
  let component: FrangoVegetaisFichaComponent;
  let fixture: ComponentFixture<FrangoVegetaisFichaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrangoVegetaisFichaComponent]
    });
    fixture = TestBed.createComponent(FrangoVegetaisFichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
