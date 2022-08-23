import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertyRoutingModule } from './property-routing.module';
import { IndexComponent } from './index.component';
import { AddPropertyComponent } from './add-property/add-property.component';
import { ListPropertyComponent } from './list-property/list-property.component';
import { SharedModule } from '../../shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from 'src/app/utils/interceptors/api.interceptor';


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
  ],
  providers:[ { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true }]
})
export class PropertyModule { }
