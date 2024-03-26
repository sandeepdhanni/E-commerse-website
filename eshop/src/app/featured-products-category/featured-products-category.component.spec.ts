import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedProductsCategoryComponent } from './featured-products-category.component';

describe('FeaturedProductsCategoryComponent', () => {
  let component: FeaturedProductsCategoryComponent;
  let fixture: ComponentFixture<FeaturedProductsCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturedProductsCategoryComponent]
    });
    fixture = TestBed.createComponent(FeaturedProductsCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
