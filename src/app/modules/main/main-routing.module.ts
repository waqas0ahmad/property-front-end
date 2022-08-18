import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IndexComponent } from './index.component';

const routes: Routes = [
  {
    path:'',component:IndexComponent,children:[
      {
        path:'',component:DashboardComponent
      },
      {
    
        path: 'property', loadChildren:()=>import("./property/property.module").then(mod=>mod.PropertyModule)
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
