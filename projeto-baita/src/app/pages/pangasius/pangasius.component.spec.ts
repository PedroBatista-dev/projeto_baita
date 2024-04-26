import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PangasiusComponent } from './pangasius.component';

describe('PangasiusComponent', () => {
  let component: PangasiusComponent;
  let fixture: ComponentFixture<PangasiusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PangasiusComponent]
    });
    fixture = TestBed.createComponent(PangasiusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
