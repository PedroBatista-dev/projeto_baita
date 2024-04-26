import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolacaComponent } from './polaca.component';

describe('PolacaComponent', () => {
  let component: PolacaComponent;
  let fixture: ComponentFixture<PolacaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PolacaComponent]
    });
    fixture = TestBed.createComponent(PolacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
