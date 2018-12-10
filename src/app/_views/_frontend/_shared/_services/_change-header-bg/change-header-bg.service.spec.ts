import { TestBed, inject } from '@angular/core/testing';

import { ChangeHeaderBgService } from './change-header-bg.service';

describe('ChangeHeaderBgService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChangeHeaderBgService]
    });
  });

  it('should be created', inject([ChangeHeaderBgService], (service: ChangeHeaderBgService) => {
    expect(service).toBeTruthy();
  }));
});
