import { TestBed } from '@angular/core/testing';

import { MapeosService } from './mapeos.service';

describe('MapeosService', () => {
  let service: MapeosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapeosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
