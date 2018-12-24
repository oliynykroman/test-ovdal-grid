import { TestBed, inject } from '@angular/core/testing';

import { KompetencerService } from './kompetencer.service';

describe('KompetencerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KompetencerService]
    });
  });

  it('should be created', inject([KompetencerService], (service: KompetencerService) => {
    expect(service).toBeTruthy();
  }));
});
