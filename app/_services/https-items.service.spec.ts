import { TestBed } from '@angular/core/testing';

import { HttpsItemsService } from './https-items.service';

describe('HttpsItemsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpsItemsService = TestBed.get(HttpsItemsService);
    expect(service).toBeTruthy();
  });
});
