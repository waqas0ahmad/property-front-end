import { HttpClient, HttpEvent, HttpEventType, HttpHeaders, HttpProgressEvent, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, scan } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../models/api-response.model';
import { Upload } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl:string = environment.apiUrl;
  constructor(private http:HttpClient,private router:Router) { }

  getCall<T>(url:string):Observable<ApiResponse<T>>{
    return this.http.get<ApiResponse<T>>(this.apiUrl+url).pipe(map(response=>{ 
      if(response.status === 401){
        this.router.navigate(['/un-authorized']);
        return new ApiResponse();
      }
      return response
    }));
  }

  postCall<T>(url:string,data:any):Observable<ApiResponse<T>>{
    return this.http.post<ApiResponse<T>>(this.apiUrl+url,data);
  }
  isHttpResponse<T>(event: HttpEvent<T>): event is HttpResponse<T> {
    return event.type === HttpEventType.Response
  }
  
  isHttpProgressEvent(
    event: HttpEvent<unknown>
  ): event is HttpProgressEvent {
    return (
      event.type === HttpEventType.DownloadProgress ||
      event.type === HttpEventType.UploadProgress
    )
  }
  upload(data: FormData): Observable<any> {

    const initialState: Upload = { state: 'PENDING', progress: 0 }
    const calculateState = (upload: Upload, event: any): Upload => {
      console.log(event);
      if (this.isHttpProgressEvent(event)) {
        return {
          progress: event.total
            ? Math.round((100 * event.loaded) / event.total)
            : upload.progress,
          state: 'IN_PROGRESS',
        }
      }
      if (this.isHttpResponse(event)) {
        return {
          progress: 100,
          state: 'DONE',
        }
      }
      return upload
    }
    return this.http
      .post(environment.api+'upload',data)
      //.pipe(scan(calculateState,initialState))
  }
}
