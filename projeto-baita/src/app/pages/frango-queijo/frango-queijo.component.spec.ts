import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrangoQueijoComponent } from './frango-queijo.component';

describe('FrangoQueijoComponent', () => {
  let component: FrangoQueijoComponent;
  let fixture: ComponentFixture<FrangoQueijoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrangoQueijoComponent]
    });
    fixture = TestBed.createComponent(FrangoQueijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
