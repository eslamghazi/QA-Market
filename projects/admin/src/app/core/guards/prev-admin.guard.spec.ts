import { TestBed } from '@angular/core/testing';

import { PrevAdminGuard } from './prev-admin.guard';

describe('PrevAdminGuard', () => {
  let guard: PrevAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PrevAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
