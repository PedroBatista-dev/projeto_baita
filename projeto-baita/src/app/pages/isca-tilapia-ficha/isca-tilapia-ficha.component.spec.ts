import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IscaTilapiaFichaComponent } from './isca-tilapia-ficha.component';

describe('IscaTilapiaFichaComponent', () => {
  let component: IscaTilapiaFichaComponent;
  let fixture: ComponentFixture<IscaTilapiaFichaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IscaTilapiaFichaComponent]
    });
    fixture = TestBed.createComponent(IscaTilapiaFichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
