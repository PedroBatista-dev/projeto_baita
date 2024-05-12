import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrangoTirasFichaComponent } from './frango-tiras-ficha.component';

describe('FrangoTirasFichaComponent', () => {
  let component: FrangoTirasFichaComponent;
  let fixture: ComponentFixture<FrangoTirasFichaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrangoTirasFichaComponent]
    });
    fixture = TestBed.createComponent(FrangoTirasFichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
