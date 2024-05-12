import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchnitzelFichaComponent } from './schnitzel-ficha.component';

describe('SchnitzelFichaComponent', () => {
  let component: SchnitzelFichaComponent;
  let fixture: ComponentFixture<SchnitzelFichaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchnitzelFichaComponent]
    });
    fixture = TestBed.createComponent(SchnitzelFichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
