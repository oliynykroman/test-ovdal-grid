import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleGeneratorComponent } from './article-generator.component';

describe('ArticleGeneratorComponent', () => {
  let component: ArticleGeneratorComponent;
  let fixture: ComponentFixture<ArticleGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
