import { KompetencerDetailModule } from './kompetencer-detail.module';

describe('KompetencerDetailModule', () => {
  let kompetencerDetailModule: KompetencerDetailModule;

  beforeEach(() => {
    kompetencerDetailModule = new KompetencerDetailModule();
  });

  it('should create an instance', () => {
    expect(kompetencerDetailModule).toBeTruthy();
  });
});
