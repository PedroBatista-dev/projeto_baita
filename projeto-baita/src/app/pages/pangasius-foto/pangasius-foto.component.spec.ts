import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PangasiusFotoComponent } from './pangasius-foto.component';

describe('PangasiusFotoComponent', () => {
  let component: PangasiusFotoComponent;
  let fixture: ComponentFixture<PangasiusFotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PangasiusFotoComponent]
    });
    fixture = TestBed.createComponent(PangasiusFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
