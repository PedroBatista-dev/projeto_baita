import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrangoQueijoFotoComponent } from './frango-queijo-foto.component';

describe('FrangoQueijoFotoComponent', () => {
  let component: FrangoQueijoFotoComponent;
  let fixture: ComponentFixture<FrangoQueijoFotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrangoQueijoFotoComponent]
    });
    fixture = TestBed.createComponent(FrangoQueijoFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
