import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from "@angular/common/http";

export interface CasesList {
  title: string;
  descr: string;
  cases: object;
}
export interface casesDetails{
  layout: string,
  title: string,
  description:string,
  imageM:any,
  halfTextM:any,
  textM: object,
  textImageM: any,
  id: number
}

@Injectable({
  providedIn: 'root'
})
export class CasesService {
  casesListURL = "http://localhost:3000/casesList";
   casesDetailURL = "http://localhost:3000/casesDetails/";

  constructor(private http:HttpClient) {
  }

  getCases(): Observable<CasesList[]> {
    return this.http.get<CasesList[]>(this.casesListURL);
  }

  getCase(id: number): Observable<casesDetails> {
    return this.http.get<casesDetails>(this.casesDetailURL + id);
  }
}

