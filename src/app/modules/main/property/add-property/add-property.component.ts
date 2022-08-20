import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { Upload } from 'src/app/modules/shared/models/interfaces';
import { ApiService } from 'src/app/modules/shared/services/api.service';
import { environment } from 'src/environments/environment';
import { AddPropertyModel } from '../models/request.models';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent implements OnInit,OnDestroy {
  upload: Upload | undefined;
  private subscription: Subscription | undefined;
  model: AddPropertyModel;
  constructor(private api:ApiService,private _snackBar: MatSnackBar) { 
    this.model = new AddPropertyModel();
  }


  ngOnInit(): void {
  }
  onImagesChange(e:any){
    const files = e.target.files;

    const form = new FormData();
    debugger
    for(let i = 0; i<files.length;i++)
      form.append("files[]",files.item(i));
    this.subscription = this.api
        .upload(form)
        .subscribe((upload) => {
          debugger
          (this.model.images = upload.data)
        })
  }
  onPropertySubmit(){
    this.api.postCall('property/create',this.model).subscribe(x=>{
      if(x.status == 200){
        this._snackBar.open(x.message,'Ok',{
          horizontalPosition:'end',
          verticalPosition:"top"
        });
        this.model = new AddPropertyModel();
      }
    });
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }  
}
