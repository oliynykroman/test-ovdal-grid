import { MainTitleModule } from './main-title.module';

describe('MainTitleModule', () => {
  let mainTitleModule: MainTitleModule;

  beforeEach(() => {
    mainTitleModule = new MainTitleModule();
  });

  it('should create an instance', () => {
    expect(mainTitleModule).toBeTruthy();
  });
});
