import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {MainNav} from "./main-nav";

@Injectable({
  providedIn: 'root'
})

export class MainNavService {
  mainNavUrl = "http://localhost:3000/menu";

  constructor(private http: HttpClient) {
  }

  getMainNav(): Observable<MainNav[]> {
    return this.http.get<MainNav[]>(this.mainNavUrl);
  }
}
