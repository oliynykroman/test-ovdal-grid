import { Component, OnInit } from '@angular/core';
import {StaticArticle, StaticArticlesService} from "../../service/static-articles.service";
import {Observable} from "rxjs/index";

@Component({
  selector: 'app-article-generator',
  templateUrl: './article-generator.component.html',
  styleUrls: ['./article-generator.component.scss']
})
export class ArticleGeneratorComponent implements OnInit {

  article$: Observable<StaticArticle>;

  constructor(private staticArticleService: StaticArticlesService) {
  }

  ngOnInit() {
    this.article$ = this.staticArticleService.getStaticArticle('generatePage');
  }

}
