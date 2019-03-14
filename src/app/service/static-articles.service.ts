import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {catchError} from "rxjs/internal/operators";

export interface StaticArticle {
  title: string;
  description: string;
  textM: any;
  imageM: any;
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class StaticArticlesService {
  staticArticleURL = "http://localhost:3000/";

  constructor(private http: HttpClient) {

  }

  getStaticArticle(url: string): Observable<StaticArticle> {
    return this.http.get<StaticArticle>(this.staticArticleURL + url);
  }
}
