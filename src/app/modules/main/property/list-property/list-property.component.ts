import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiResponse } from 'src/app/modules/shared/models/api-response.model';
import { ApiService } from 'src/app/modules/shared/services/api.service';

@Component({
  selector: 'app-list-property',
  templateUrl: './list-property.component.html',
  styleUrls: ['./list-property.component.scss']
})
export class ListPropertyComponent implements OnInit {
  propertyList: any[] | undefined;
  displayedColumns: string[] = ['propertyName', 'location', 'details', 'images','actions'];
  dataSource = new MatTableDataSource<any[]>();
  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
    this.getAllProperties();
  }
  getAllProperties() {
    this.api.getCall<any[]>('property/all').subscribe(x=>{
      if(x.status == 200){
        this.propertyList = x.data;
        this.dataSource.data = x.data;
      }
    })
  }
}
