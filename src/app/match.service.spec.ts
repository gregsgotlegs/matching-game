import { TestBed } from '@angular/core/testing';

import { MatchesService } from './matches.service';

describe('MatchServiceService', () => {
  let service: MatchesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatchesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});