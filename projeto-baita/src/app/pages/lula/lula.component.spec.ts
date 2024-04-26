import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LulaComponent } from './lula.component';

describe('LulaComponent', () => {
  let component: LulaComponent;
  let fixture: ComponentFixture<LulaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LulaComponent]
    });
    fixture = TestBed.createComponent(LulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
