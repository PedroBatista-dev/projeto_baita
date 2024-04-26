import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrangoApimentadoComponent } from './frango-apimentado.component';

describe('FrangoApimentadoComponent', () => {
  let component: FrangoApimentadoComponent;
  let fixture: ComponentFixture<FrangoApimentadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrangoApimentadoComponent]
    });
    fixture = TestBed.createComponent(FrangoApimentadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
