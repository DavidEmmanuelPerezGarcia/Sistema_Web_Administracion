import { TestBed } from '@angular/core/testing';

import { VentaEntradasService } from './venta-entradas.service';

describe('VentaEntradasService', () => {
  let service: VentaEntradasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VentaEntradasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
