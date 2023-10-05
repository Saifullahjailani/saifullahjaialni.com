import { TestBed } from '@angular/core/testing';

import { NavElemServiceService } from './nav-elem-service.service';

describe('NavElemServiceService', () => {
  let service: NavElemServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavElemServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
