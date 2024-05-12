import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamaraoFotoComponent } from './camarao-foto.component';

describe('CamaraoFotoComponent', () => {
  let component: CamaraoFotoComponent;
  let fixture: ComponentFixture<CamaraoFotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CamaraoFotoComponent]
    });
    fixture = TestBed.createComponent(CamaraoFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
