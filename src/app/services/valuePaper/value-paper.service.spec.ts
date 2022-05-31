import { TestBed } from '@angular/core/testing';

import { ValuePaperService } from './value-paper.service';

describe('ValuePaperService', () => {
  let service: ValuePaperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValuePaperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
