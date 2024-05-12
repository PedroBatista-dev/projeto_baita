import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrangoVegetaisFotoComponent } from './frango-vegetais-foto.component';

describe('FrangoVegetaisFotoComponent', () => {
  let component: FrangoVegetaisFotoComponent;
  let fixture: ComponentFixture<FrangoVegetaisFotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrangoVegetaisFotoComponent]
    });
    fixture = TestBed.createComponent(FrangoVegetaisFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
