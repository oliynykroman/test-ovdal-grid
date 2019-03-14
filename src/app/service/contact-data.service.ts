import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs/index";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
}

export interface contactFormFields {
  email: string;
  firstName: string;
  lastName: string;
  textMessage: string;
}

@Injectable({
  providedIn: 'root'
})

export class ContactDataService {
  constructor(private http: HttpClient) {

  }

  addContactData(contactData: contactFormFields): Observable<contactFormFields> {
    return this.http.post<contactFormFields>('http://localhost:3000/contacts', contactData, httpOptions);
  }
}
