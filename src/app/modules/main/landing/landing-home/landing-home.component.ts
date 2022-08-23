import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/modules/shared/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-landing-home',
  templateUrl: './landing-home.component.html',
  styleUrls: ['./landing-home.component.scss']
})
export class LandingHomeComponent implements OnInit {
  propertiesList:any[]=[];
  env:string=environment.api;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.searchProperties();
  }
  
  searchProperties() {
    this.api.getCall<any[]>('public/search').subscribe(x => {
      if (x.status === 200) {
        this.propertiesList = x.data;
      }
    })
  }
}
