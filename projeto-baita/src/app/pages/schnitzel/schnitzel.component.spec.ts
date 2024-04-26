import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchnitzelComponent } from './schnitzel.component';

describe('SchnitzelComponent', () => {
  let component: SchnitzelComponent;
  let fixture: ComponentFixture<SchnitzelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchnitzelComponent]
    });
    fixture = TestBed.createComponent(SchnitzelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
