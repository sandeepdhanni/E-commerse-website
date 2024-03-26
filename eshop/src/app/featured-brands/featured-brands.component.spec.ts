import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedBrandsComponent } from './featured-brands.component';

describe('FeaturedBrandsComponent', () => {
  let component: FeaturedBrandsComponent;
  let fixture: ComponentFixture<FeaturedBrandsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturedBrandsComponent]
    });
    fixture = TestBed.createComponent(FeaturedBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
