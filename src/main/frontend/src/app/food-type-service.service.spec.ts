import { TestBed } from '@angular/core/testing';

import { FoodTypeServiceService } from './food-type-service.service';

describe('FoodTypeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FoodTypeServiceService = TestBed.get(FoodTypeServiceService);
    expect(service).toBeTruthy();
  });
});
