import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorkitosComponent } from './porkitos.component';

describe('PorkitosComponent', () => {
  let component: PorkitosComponent;
  let fixture: ComponentFixture<PorkitosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PorkitosComponent]
    });
    fixture = TestBed.createComponent(PorkitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
