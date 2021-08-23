import { TestBed } from '@angular/core/testing';

import { AutorServicesService } from './autor-services.service';

describe('AutorServicesService', () => {
  let service: AutorServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutorServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
