import { TestBed } from '@angular/core/testing';

import { ListOfActionsService } from './list-of-actions.service';

describe('ListOfActionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListOfActionsService = TestBed.get(ListOfActionsService);
    expect(service).toBeTruthy();
  });
});
