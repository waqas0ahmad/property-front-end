import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private router:Router) { }

  addLogin(user:any){
    localStorage.setItem("user",JSON.stringify(user));
    localStorage.setItem("token",user.token);
  }
  removeLogin(){
    localStorage.clear();
    this.router.navigate(['/account']);
  }
}
