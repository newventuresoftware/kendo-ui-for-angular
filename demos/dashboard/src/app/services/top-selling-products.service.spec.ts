import { TestBed, inject } from '@angular/core/testing';

import { TopSellingProductsService } from './top-selling-products.service';

describe('TopSellingProductsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TopSellingProductsService]
    });
  });

  it('should be created', inject([TopSellingProductsService], (service: TopSellingProductsService) => {
    expect(service).toBeTruthy();
  }));
});
