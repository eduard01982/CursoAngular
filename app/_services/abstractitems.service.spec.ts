import { TestBed } from '@angular/core/testing';

import { AbstractitemsService } from './abstractitems.service';

describe('AbstractitemsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AbstractitemsService = TestBed.get(AbstractitemsService);
    expect(service).toBeTruthy();
  });
});
