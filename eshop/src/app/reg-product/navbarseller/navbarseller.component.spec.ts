import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarsellerComponent } from './navbarseller.component';

describe('NavbarsellerComponent', () => {
  let component: NavbarsellerComponent;
  let fixture: ComponentFixture<NavbarsellerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarsellerComponent]
    });
    fixture = TestBed.createComponent(NavbarsellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
