import { TestBed } from '@angular/core/testing';

import { ThirdCmsService } from './third-cms.service';

describe('ThirdCmsService', () => {
  let service: ThirdCmsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThirdCmsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
