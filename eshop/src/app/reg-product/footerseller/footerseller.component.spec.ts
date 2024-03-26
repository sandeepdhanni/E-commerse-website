import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootersellerComponent } from './footerseller.component';

describe('FootersellerComponent', () => {
  let component: FootersellerComponent;
  let fixture: ComponentFixture<FootersellerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FootersellerComponent]
    });
    fixture = TestBed.createComponent(FootersellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
