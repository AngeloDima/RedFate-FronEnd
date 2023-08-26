import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantaloniDonnaComponent } from './pantaloni-donna.component';

describe('PantaloniDonnaComponent', () => {
  let component: PantaloniDonnaComponent;
  let fixture: ComponentFixture<PantaloniDonnaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PantaloniDonnaComponent]
    });
    fixture = TestBed.createComponent(PantaloniDonnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
