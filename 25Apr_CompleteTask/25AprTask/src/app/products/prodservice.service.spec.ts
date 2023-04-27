import { TestBed } from '@angular/core/testing';

import { ProdserviceService } from '../services/prodservice.service';

describe('ProdserviceService', () => {
  let service: ProdserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
