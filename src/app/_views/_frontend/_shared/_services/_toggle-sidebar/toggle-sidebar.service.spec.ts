import { TestBed, inject } from '@angular/core/testing';

import { ToggleSidebarService } from './toggle-sidebar.service';

describe('ToggleSidebarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToggleSidebarService]
    });
  });

  it('should be created', inject([ToggleSidebarService], (service: ToggleSidebarService) => {
    expect(service).toBeTruthy();
  }));
});
