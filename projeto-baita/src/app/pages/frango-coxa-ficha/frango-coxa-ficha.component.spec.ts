import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrangoCoxaFichaComponent } from './frango-coxa-ficha.component';

describe('FrangoCoxaFichaComponent', () => {
  let component: FrangoCoxaFichaComponent;
  let fixture: ComponentFixture<FrangoCoxaFichaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrangoCoxaFichaComponent]
    });
    fixture = TestBed.createComponent(FrangoCoxaFichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
