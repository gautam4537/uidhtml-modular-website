import { TestBed, inject } from '@angular/core/testing';

import { SubmitFormService } from './submit-form.service';

describe('SubmitFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubmitFormService]
    });
  });

  it('should be created', inject([SubmitFormService], (service: SubmitFormService) => {
    expect(service).toBeTruthy();
  }));
});
