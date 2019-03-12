import {Component, OnInit} from '@angular/core';
import {StaticArticle, StaticArticlesService} from "../../service/static-articles.service";
import {Observable} from "rxjs/index";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  article$: Observable<StaticArticle>;

  constructor(private staticArticleService: StaticArticlesService) {
  }

  ngOnInit() {
    this.article$ = this.staticArticleService.getStaticArticle('about');
  }

}
