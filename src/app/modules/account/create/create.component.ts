import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiResponse } from '../../shared/models/api-response.model';
import { ApiService } from '../../shared/services/api.service';
import { StorageService } from '../../shared/services/storage.service';
import { CreateRequestModel } from '../models/request.models';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  model: CreateRequestModel;
  constructor(
    private api: ApiService,
    private storage:StorageService,
    private router: Router
  ) {
    this.model = new CreateRequestModel();
  }

  ngOnInit(): void {
  }
  onCreateFormSubmit(f: NgForm) {
    if (f.valid) {
      this.api.postCall('account/create', this.model).subscribe((response: ApiResponse<any>) => {
        alert(response.message);
        if (response.status == 200) {
          this.storage.addLogin(response.data);
          this.router.navigate(['/']);
        }
      })
    }
  }
}
