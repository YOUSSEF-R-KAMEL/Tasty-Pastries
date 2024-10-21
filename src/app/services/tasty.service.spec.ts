import { TestBed } from '@angular/core/testing';

import { TastyService } from './tasty.service';

describe('TastyService', () => {
  let service: TastyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TastyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
