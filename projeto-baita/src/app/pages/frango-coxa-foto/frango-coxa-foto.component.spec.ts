import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrangoCoxaFotoComponent } from './frango-coxa-foto.component';

describe('FrangoCoxaFotoComponent', () => {
  let component: FrangoCoxaFotoComponent;
  let fixture: ComponentFixture<FrangoCoxaFotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrangoCoxaFotoComponent]
    });
    fixture = TestBed.createComponent(FrangoCoxaFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
