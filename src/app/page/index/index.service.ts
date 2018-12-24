import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";

export interface Indexblock {
  title: string;
  layoutModel:string;
}

@Injectable({
  providedIn: 'root'
})

export class IndexService {


  indexUrl: string = "http://localhost:3000/index";
  constructor(private http: HttpClient) {

  }

  getIndexData(): Observable<Indexblock> {
    return this.http.get<Indexblock>(this.indexUrl);
  }
}
