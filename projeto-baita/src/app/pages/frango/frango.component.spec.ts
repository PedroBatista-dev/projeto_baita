import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrangoComponent } from './frango.component';

describe('FrangoComponent', () => {
  let component: FrangoComponent;
  let fixture: ComponentFixture<FrangoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrangoComponent]
    });
    fixture = TestBed.createComponent(FrangoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
