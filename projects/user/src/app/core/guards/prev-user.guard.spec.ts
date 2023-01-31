import { TestBed } from '@angular/core/testing';

import { PrevUserGuard } from './prev-user.guard';

describe('PrevUserGuard', () => {
  let guard: PrevUserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PrevUserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
