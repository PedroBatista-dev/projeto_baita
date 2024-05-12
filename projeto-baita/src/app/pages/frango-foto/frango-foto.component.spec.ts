import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrangoFotoComponent } from './frango-foto.component';

describe('FrangoFotoComponent', () => {
  let component: FrangoFotoComponent;
  let fixture: ComponentFixture<FrangoFotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrangoFotoComponent]
    });
    fixture = TestBed.createComponent(FrangoFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
