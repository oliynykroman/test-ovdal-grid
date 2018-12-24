import {Injectable} from '@angular/core';
import {Banner} from "./banner";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class BannerService {
  bannerItemUrl = "http://localhost:3000/banner";

  constructor(private http: HttpClient) {

  }
  getBannerItem():Observable<Banner[]>{
    return this.http.get<Banner[]>(this.bannerItemUrl);
  }
}
