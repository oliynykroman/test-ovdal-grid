import { ArticleGeneratorModule } from './article-generator.module';

describe('ArticleGeneratorModule', () => {
  let articleGeneratorModule: ArticleGeneratorModule;

  beforeEach(() => {
    articleGeneratorModule = new ArticleGeneratorModule();
  });

  it('should create an instance', () => {
    expect(articleGeneratorModule).toBeTruthy();
  });
});
