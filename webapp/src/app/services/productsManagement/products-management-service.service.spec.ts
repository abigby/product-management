import { TestBed } from '@angular/core/testing';

import { ProductsManagementServiceService } from './products-management-service.service';

describe('ProductsManagementServiceService', () => {
  let service: ProductsManagementServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsManagementServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
