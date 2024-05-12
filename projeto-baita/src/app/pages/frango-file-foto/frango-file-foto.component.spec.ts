import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrangoFileFotoComponent } from './frango-file-foto.component';

describe('FrangoFileFotoComponent', () => {
  let component: FrangoFileFotoComponent;
  let fixture: ComponentFixture<FrangoFileFotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrangoFileFotoComponent]
    });
    fixture = TestBed.createComponent(FrangoFileFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
