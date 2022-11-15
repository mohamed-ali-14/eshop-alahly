import { TestBed } from '@angular/core/testing';

import { MontagatService } from './montagat.service';

describe('MontagatService', () => {
  let service: MontagatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MontagatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
