import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantaloniUOMOComponent } from './pantaloni-uomo.component';

describe('PantaloniUOMOComponent', () => {
  let component: PantaloniUOMOComponent;
  let fixture: ComponentFixture<PantaloniUOMOComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PantaloniUOMOComponent]
    });
    fixture = TestBed.createComponent(PantaloniUOMOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
