import { TestBed } from '@angular/core/testing';

import { AreaServiceService } from './area.service';

describe('AreaService', () => {
  let service: AreaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AreaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
