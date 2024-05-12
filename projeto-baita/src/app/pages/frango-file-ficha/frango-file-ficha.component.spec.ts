import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrangoFileFichaComponent } from './frango-file-ficha.component';

describe('FrangoFileFichaComponent', () => {
  let component: FrangoFileFichaComponent;
  let fixture: ComponentFixture<FrangoFileFichaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrangoFileFichaComponent]
    });
    fixture = TestBed.createComponent(FrangoFileFichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
