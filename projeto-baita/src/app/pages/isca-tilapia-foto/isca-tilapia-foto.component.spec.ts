import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IscaTilapiaFotoComponent } from './isca-tilapia-foto.component';

describe('IscaTilapiaFotoComponent', () => {
  let component: IscaTilapiaFotoComponent;
  let fixture: ComponentFixture<IscaTilapiaFotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IscaTilapiaFotoComponent]
    });
    fixture = TestBed.createComponent(IscaTilapiaFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
