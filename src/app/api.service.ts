import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = "https://localhost:7011/"
  constructor(private http: HttpClient) { }
  getUserList(): Observable<any>{
    return this.http.get<any>('${this.url}/GetUserList');
  }
  register(user:any): Observable<any>{
    return this.http.post<any>('${this.url}/Register',user);
  }
  login(Loginmodel:any): Observable<any>{
    return this.http.post<any>('${this.url}/login', Loginmodel)
  }
  getAllRestaurant(Restaurant:any): Observable<any>{
    return this.http.get<any>('${this.url}/GetAllRestaurant')
  }
  getRestaurantByName(name:String): Observable<any>{
    return this.http.get<any>('${this.url}/GetRestaurantByName/{name}')
  }
  getUserByName(name:string): Observable<any>{
    return this.http.get<any>('${this.url}/GetUserByName/{name}')
  }
  addRestaurant(Restaurant:any): Observable<any>{
    return this.http.post<any>('${this.url}/AddRestaurant',Restaurant)
  }
}
