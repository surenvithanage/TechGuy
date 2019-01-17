import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
 
  private baseUrl = "http://localhost:6002";

  constructor(private http :HttpClient) { }

  loadPages() : Observable<any>{
    return this.http.get(`${this.baseUrl}/pages` );
  }
}
