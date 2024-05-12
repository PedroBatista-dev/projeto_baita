import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PangasiusFichaComponent } from './pangasius-ficha.component';

describe('PangasiusFichaComponent', () => {
  let component: PangasiusFichaComponent;
  let fixture: ComponentFixture<PangasiusFichaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PangasiusFichaComponent]
    });
    fixture = TestBed.createComponent(PangasiusFichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
