import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TilapiaFileComponent } from './tilapia-file.component';

describe('TilapiaFileComponent', () => {
  let component: TilapiaFileComponent;
  let fixture: ComponentFixture<TilapiaFileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TilapiaFileComponent]
    });
    fixture = TestBed.createComponent(TilapiaFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
