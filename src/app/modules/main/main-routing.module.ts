import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/utils/guards/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IndexComponent } from './index.component';
import { UnAuthorizedComponent } from './un-authorized/un-authorized.component';

const routes: Routes = [
  {
    path:'admin',component:IndexComponent,canActivate:[AuthGuard],children:[
      {
        path:'',component:DashboardComponent
      },
      {
    
        path: 'property', loadChildren:()=>import("./property/property.module").then(mod=>mod.PropertyModule)
      }      
    ]
  },
  {
    path:'',loadChildren:()=>import("./landing/landing.module").then(mod=>mod.LandingModule)
  },
  {
    path:'un-authorized',component:UnAuthorizedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
