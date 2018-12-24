import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs/index";
import {HttpClient} from "@angular/common/http";

export interface KomeptecerList {
  title: string;
  description: string;
  textM: any;
  imageM: any;
  kompetencers:any;
  id:number;
}

export interface KomeptecerDetail {
  title: string;
  description: string;
  textM: any;
  imageM: any;
  id:number;
}


@Injectable({
  providedIn: 'root'
})
export class KompetencerService {
  kompetencerListURL = "http://localhost:3000/kompetencerList";
  kompetencerDetailURL = "http://localhost:3000/kompetencerDetails/";

  constructor(private http: HttpClient) {
  }

  getKompetencers(): Observable<KomeptecerList[]> {
    return this.http.get<KomeptecerList[]>(this.kompetencerListURL);
  }

  getKompetencer(id: number): Observable<KomeptecerDetail> {
    return this.http.get<KomeptecerDetail>(this.kompetencerDetailURL + id);
  }
}
