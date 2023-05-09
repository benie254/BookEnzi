import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// const apiURL = 'http://127.0.0.1:8000/api/'
const apiURL = 'https://web-production-7777.up.railway.app/api/'

@Injectable({
  providedIn: 'any'
})
export class ApiService {
  bookingURL = apiURL + 'book/unit/'
  mpesa = apiURL + 'payment/mpesa/'

  constructor(
    private http:HttpClient,
  ) { }

  bookUnit(userData: any): Observable<any>{
    return this.http.post<any>(this.bookingURL, userData)
  }
  testMpesa(): Observable<any>{
    return this.http.get<any>(this.mpesa)
  }
}
