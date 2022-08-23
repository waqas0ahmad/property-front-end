import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/modules/shared/services/storage.service';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  
  constructor(private storage:StorageService) {
    
  }
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = this.storage.getToken();
    let authorization = "";
    if(token){
      authorization = token??"";
    }
    return next.handle(httpRequest.clone({setHeaders:{authorization}}));
  }
}