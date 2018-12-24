import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";

export interface Adress {
  locationCity: string;
  locationStreet: string;
  locationPhone: string;
  locationEmail: string;
  id: number;
}

export interface Copyright {
  copyTitle: string;
  copyLink: string;
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class TermsAdressService {
  adressUrl = "http://localhost:3000/adress";
  copyrightUrl = "http://localhost:3000/copyright";

  constructor(private http: HttpClient) {
  }
  getAdress(): Observable<Adress[]> {
    return this.http.get<Adress[]>(this.adressUrl);
  }
  getCopyright(): Observable<Copyright[]> {
    return this.http.get<Copyright[]>(this.copyrightUrl);
  }
}
