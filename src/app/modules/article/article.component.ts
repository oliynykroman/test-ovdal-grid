import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input() item: any;

  constructor() {
  }

  ngOnInit() {
    console.log(this.item.layoutModel);
  }

}
