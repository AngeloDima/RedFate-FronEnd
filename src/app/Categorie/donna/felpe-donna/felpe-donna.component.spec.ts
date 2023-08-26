import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FelpeDonnaComponent } from './felpe-donna.component';

describe('FelpeDonnaComponent', () => {
  let component: FelpeDonnaComponent;
  let fixture: ComponentFixture<FelpeDonnaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FelpeDonnaComponent]
    });
    fixture = TestBed.createComponent(FelpeDonnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
