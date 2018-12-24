import { ProccessModule } from './proccess.module';

describe('ProccessModule', () => {
  let proccessModule: ProccessModule;

  beforeEach(() => {
    proccessModule = new ProccessModule();
  });

  it('should create an instance', () => {
    expect(proccessModule).toBeTruthy();
  });
});
