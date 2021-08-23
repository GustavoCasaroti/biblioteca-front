import { TestBed } from '@angular/core/testing';

import { EditoraServicesService } from './editora-services.service';

describe('EditoraServicesService', () => {
  let service: EditoraServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditoraServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
