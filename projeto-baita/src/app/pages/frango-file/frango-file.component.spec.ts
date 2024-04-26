import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrangoFileComponent } from './frango-file.component';

describe('FrangoFileComponent', () => {
  let component: FrangoFileComponent;
  let fixture: ComponentFixture<FrangoFileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrangoFileComponent]
    });
    fixture = TestBed.createComponent(FrangoFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
