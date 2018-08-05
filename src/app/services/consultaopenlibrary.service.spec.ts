import { TestBed, inject } from '@angular/core/testing';

import { ConsultaopenlibraryService } from './consultaopenlibrary.service';

describe('ConsultaopenlibraryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsultaopenlibraryService]
    });
  });

  it('should be created', inject([ConsultaopenlibraryService], (service: ConsultaopenlibraryService) => {
    expect(service).toBeTruthy();
  }));
});
