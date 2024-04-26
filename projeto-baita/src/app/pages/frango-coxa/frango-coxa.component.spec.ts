import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrangoCoxaComponent } from './frango-coxa.component';

describe('FrangoCoxaComponent', () => {
  let component: FrangoCoxaComponent;
  let fixture: ComponentFixture<FrangoCoxaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrangoCoxaComponent]
    });
    fixture = TestBed.createComponent(FrangoCoxaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
