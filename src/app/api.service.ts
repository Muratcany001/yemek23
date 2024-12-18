import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = "https://localhost:7011"
  constructor(private http: HttpClient) { }
  getUserList(): Observable<any>{
    return this.http.get<any>(`${this.url}/GetUserList`);
  }
  register(user:any): Observable<any>{
    return this.http.post<any>(`${this.url}/Register`,user);
  }
  login(loginModel:any): Observable<any>{
    return this.http.post<any>(`${this.url}/login`, loginModel);
  }
  getAllRestaurant(): Observable<any>{
    return this.http.get<any>(`${this.url}/GetAllRestaurant`);
  }
  getRestaurantByName(name:string): Observable<any>{
    return this.http.get<any>(`${this.url}/GetRestaurantByName/${name}`);
  }
  getUserByName(name:string): Observable<any>{
    return this.http.get<any>(`${this.url}/GetUserByName/${name}`);
  }
  addRestaurant(restaurant:any): Observable<any>{
    return this.http.post<any>(`${this.url}/AddRestaurant`,restaurant);
  }
}
