import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertyRoutingModule } from './property-routing.module';
import { IndexComponent } from './index.component';
import { AddPropertyComponent } from './add-property/add-property.component';
import { ListPropertyComponent } from './list-property/list-property.component';
import { SharedModule } from '../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    IndexComponent,
    AddPropertyComponent,
    ListPropertyComponent
  ],
  imports: [
    CommonModule,
    PropertyRoutingModule,
    SharedModule,
    HttpClientModule
  ]
})
export class PropertyModule { }
