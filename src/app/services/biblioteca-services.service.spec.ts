import { TestBed } from '@angular/core/testing';

import { BibliotecaServicesService } from './biblioteca-services.service';

describe('BibliotecaServicesService', () => {
  let service: BibliotecaServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BibliotecaServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
