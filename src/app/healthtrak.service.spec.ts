import { TestBed } from '@angular/core/testing';

import { HealthtrakService } from './healthtrak.service';

describe('HealthtrakService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HealthtrakService = TestBed.get(HealthtrakService);
    expect(service).toBeTruthy();
  });
});
