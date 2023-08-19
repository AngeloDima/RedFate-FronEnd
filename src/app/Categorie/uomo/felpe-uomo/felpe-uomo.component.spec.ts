import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FelpeUOMOComponent } from './felpe-uomo.component';

describe('FelpeUOMOComponent', () => {
  let component: FelpeUOMOComponent;
  let fixture: ComponentFixture<FelpeUOMOComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FelpeUOMOComponent]
    });
    fixture = TestBed.createComponent(FelpeUOMOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
