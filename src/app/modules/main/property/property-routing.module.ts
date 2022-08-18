import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPropertyComponent } from './add-property/add-property.component';
import { IndexComponent } from './index.component';
import { ListPropertyComponent } from './list-property/list-property.component';

const routes: Routes = [
  {
    path:'',component:IndexComponent,children:[
      {
        path:'add',component:AddPropertyComponent
      },
      {
        path:'list',component:ListPropertyComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertyRoutingModule { }
