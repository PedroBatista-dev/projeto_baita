import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolacaFotoComponent } from './polaca-foto.component';

describe('PolacaFotoComponent', () => {
  let component: PolacaFotoComponent;
  let fixture: ComponentFixture<PolacaFotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PolacaFotoComponent]
    });
    fixture = TestBed.createComponent(PolacaFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
