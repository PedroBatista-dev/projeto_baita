import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrangoApimentadoFotoComponent } from './frango-apimentado-foto.component';

describe('FrangoApimentadoFotoComponent', () => {
  let component: FrangoApimentadoFotoComponent;
  let fixture: ComponentFixture<FrangoApimentadoFotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrangoApimentadoFotoComponent]
    });
    fixture = TestBed.createComponent(FrangoApimentadoFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
