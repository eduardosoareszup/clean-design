import { TestBed } from '@angular/core/testing';

import { CleanDesignService } from './clean-design.service';

describe('CleanDesignService', () => {
  let service: CleanDesignService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CleanDesignService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
