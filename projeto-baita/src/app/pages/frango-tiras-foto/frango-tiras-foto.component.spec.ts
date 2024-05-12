import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrangoTirasFotoComponent } from './frango-tiras-foto.component';

describe('FrangoTirasFotoComponent', () => {
  let component: FrangoTirasFotoComponent;
  let fixture: ComponentFixture<FrangoTirasFotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrangoTirasFotoComponent]
    });
    fixture = TestBed.createComponent(FrangoTirasFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
