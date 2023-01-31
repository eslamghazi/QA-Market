import { TestBed } from '@angular/core/testing';

import { TransSenderService } from './trans-sender.service';

describe('TransSenderService', () => {
  let service: TransSenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransSenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
