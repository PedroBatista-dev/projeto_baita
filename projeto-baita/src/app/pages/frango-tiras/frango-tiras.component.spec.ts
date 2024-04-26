import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrangoTirasComponent } from './frango-tiras.component';

describe('FrangoTirasComponent', () => {
  let component: FrangoTirasComponent;
  let fixture: ComponentFixture<FrangoTirasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrangoTirasComponent]
    });
    fixture = TestBed.createComponent(FrangoTirasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
