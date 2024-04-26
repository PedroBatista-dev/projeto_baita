import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrangoVegetaisComponent } from './frango-vegetais.component';

describe('FrangoVegetaisComponent', () => {
  let component: FrangoVegetaisComponent;
  let fixture: ComponentFixture<FrangoVegetaisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrangoVegetaisComponent]
    });
    fixture = TestBed.createComponent(FrangoVegetaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
