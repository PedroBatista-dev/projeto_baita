import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrangoQueijoFichaComponent } from './frango-queijo-ficha.component';

describe('FrangoQueijoFichaComponent', () => {
  let component: FrangoQueijoFichaComponent;
  let fixture: ComponentFixture<FrangoQueijoFichaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrangoQueijoFichaComponent]
    });
    fixture = TestBed.createComponent(FrangoQueijoFichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
