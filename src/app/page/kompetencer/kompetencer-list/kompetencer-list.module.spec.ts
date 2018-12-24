import { KompetencerListModule } from './kompetencer-list.module';

describe('KompetencerListModule', () => {
  let kompetencerListModule: KompetencerListModule;

  beforeEach(() => {
    kompetencerListModule = new KompetencerListModule();
  });

  it('should create an instance', () => {
    expect(kompetencerListModule).toBeTruthy();
  });
});
