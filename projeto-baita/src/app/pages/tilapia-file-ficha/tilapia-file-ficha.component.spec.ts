import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TilapiaFileFichaComponent } from './tilapia-file-ficha.component';

describe('TilapiaFileFichaComponent', () => {
  let component: TilapiaFileFichaComponent;
  let fixture: ComponentFixture<TilapiaFileFichaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TilapiaFileFichaComponent]
    });
    fixture = TestBed.createComponent(TilapiaFileFichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
