import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrangoCheddarFichaComponent } from './frango-cheddar-ficha.component';

describe('FrangoCheddarFichaComponent', () => {
  let component: FrangoCheddarFichaComponent;
  let fixture: ComponentFixture<FrangoCheddarFichaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrangoCheddarFichaComponent]
    });
    fixture = TestBed.createComponent(FrangoCheddarFichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
