import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../models/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl:string = environment.apiUrl;
  constructor(private http:HttpClient) { }

  getCall<T>(url:string):Observable<ApiResponse<T>>{
    return this.http.get<ApiResponse<T>>(this.apiUrl+url);
  }

  postCall<T>(url:string,data:any):Observable<ApiResponse<T>>{
    return this.http.post<ApiResponse<T>>(this.apiUrl+url,data);
  }
}
