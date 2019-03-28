import { TestBed, inject } from '@angular/core/testing';

import { OmeletteMetierService } from './omelette-metier.service';

describe('OmeletteMetierService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OmeletteMetierService]
    });
  });

  it('should be created', inject([OmeletteMetierService], (service: OmeletteMetierService) => {
    expect(service).toBeTruthy();
  }));
});
