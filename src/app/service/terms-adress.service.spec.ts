import { TestBed, inject } from '@angular/core/testing';

import { TermsAdressService } from './terms-adress.service';

describe('TermsAdressService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TermsAdressService]
    });
  });

  it('should be created', inject([TermsAdressService], (service: TermsAdressService) => {
    expect(service).toBeTruthy();
  }));
});
