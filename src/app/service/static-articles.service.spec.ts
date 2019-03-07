import { TestBed, inject } from '@angular/core/testing';

import { StaticArticlesService } from './static-articles.service';

describe('StaticArticlesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StaticArticlesService]
    });
  });

  it('should be created', inject([StaticArticlesService], (service: StaticArticlesService) => {
    expect(service).toBeTruthy();
  }));
});
