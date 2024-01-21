import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  routeUrl = `${environment.apiUrl}`;
  constructor(public httpClient: HttpClient) { }
  getAllBranches() {
    const headers = new HttpHeaders({
      'Content-Type':'application/json'
    });
    const options = { headers: headers };
    return this.httpClient.get<any[]>(this.routeUrl,options)
  }
}
