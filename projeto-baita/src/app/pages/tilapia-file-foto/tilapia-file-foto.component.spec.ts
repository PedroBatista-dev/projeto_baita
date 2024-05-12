import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TilapiaFileFotoComponent } from './tilapia-file-foto.component';

describe('TilapiaFileFotoComponent', () => {
  let component: TilapiaFileFotoComponent;
  let fixture: ComponentFixture<TilapiaFileFotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TilapiaFileFotoComponent]
    });
    fixture = TestBed.createComponent(TilapiaFileFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
