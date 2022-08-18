import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiResponse } from '../../shared/models/api-response.model';
import { ApiService } from '../../shared/services/api.service';
import { StorageService } from '../../shared/services/storage.service';
import { LoginRequestModel } from '../models/request.models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model: LoginRequestModel;
  constructor(
    private api: ApiService,
    private storage:StorageService,
    private router: Router
  ) { 
    this.model = new LoginRequestModel();
  }

  ngOnInit(): void {
  }
  loginFormSubmit(f:NgForm){
    if(f.valid){
      this.api.postCall('account/login',this.model).subscribe((res:ApiResponse<any>)=>{
        if(res.status == 200){
          this.storage.addLogin(res.data);
          this.router.navigate(['/']);
        }
      })
    }
  }
}
