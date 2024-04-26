import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IscaTilapiaComponent } from './isca-tilapia.component';

describe('IscaTilapiaComponent', () => {
  let component: IscaTilapiaComponent;
  let fixture: ComponentFixture<IscaTilapiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IscaTilapiaComponent]
    });
    fixture = TestBed.createComponent(IscaTilapiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
