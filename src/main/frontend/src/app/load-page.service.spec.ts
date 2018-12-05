import { TestBed } from '@angular/core/testing';

import { LoadPageService } from './load-page.service';

describe('LoadPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadPageService = TestBed.get(LoadPageService);
    expect(service).toBeTruthy();
  });
});
