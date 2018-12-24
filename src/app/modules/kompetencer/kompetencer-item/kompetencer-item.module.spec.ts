import { KompetencerItemModule } from './kompetencer-item.module';

describe('KompetencerItemModule', () => {
  let kompetencerItemModule: KompetencerItemModule;

  beforeEach(() => {
    kompetencerItemModule = new KompetencerItemModule();
  });

  it('should create an instance', () => {
    expect(kompetencerItemModule).toBeTruthy();
  });
});
