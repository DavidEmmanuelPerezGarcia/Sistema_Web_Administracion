import { TestBed } from '@angular/core/testing';

import { PanelMenuService } from './panel-menu.service';

describe('PanelMenuService', () => {
  let service: PanelMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PanelMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
