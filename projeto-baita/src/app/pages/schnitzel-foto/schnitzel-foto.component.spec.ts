import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchnitzelFotoComponent } from './schnitzel-foto.component';

describe('SchnitzelFotoComponent', () => {
  let component: SchnitzelFotoComponent;
  let fixture: ComponentFixture<SchnitzelFotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchnitzelFotoComponent]
    });
    fixture = TestBed.createComponent(SchnitzelFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
