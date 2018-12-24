import { CaseItemModule } from './case-item.module';

describe('CaseItemModule', () => {
  let caseItemModule: CaseItemModule;

  beforeEach(() => {
    caseItemModule = new CaseItemModule();
  });

  it('should create an instance', () => {
    expect(caseItemModule).toBeTruthy();
  });
});
