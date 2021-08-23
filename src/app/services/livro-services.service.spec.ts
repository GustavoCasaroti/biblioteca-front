import { TestBed } from '@angular/core/testing';

import { LivroServicesService } from './livro-services.service';

describe('LivroServicesService', () => {
  let service: LivroServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LivroServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
