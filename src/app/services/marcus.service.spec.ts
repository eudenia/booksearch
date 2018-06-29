import { TestBed, inject } from '@angular/core/testing';

import { MarcusService } from './marcus.service';

describe('MarcusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarcusService]
    });
  });

  it('should be created', inject([MarcusService], (service: MarcusService) => {
    expect(service).toBeTruthy();
  }));
});
