import { TestBed } from '@angular/core/testing';

import { PlatformSetService } from './platform-set.service';

describe('PlatformSetService', () => {
  let service: PlatformSetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlatformSetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
