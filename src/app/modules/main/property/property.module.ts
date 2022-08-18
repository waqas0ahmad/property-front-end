import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertyRoutingModule } from './property-routing.module';
import { IndexComponent } from './index.component';
import { AddPropertyComponent } from './add-property/add-property.component';
import { ListPropertyComponent } from './list-property/list-property.component';


@NgModule({
  declarations: [
    IndexComponent,
    AddPropertyComponent,
    ListPropertyComponent
  ],
  imports: [
    CommonModule,
    PropertyRoutingModule
  ]
})
export class PropertyModule { }
