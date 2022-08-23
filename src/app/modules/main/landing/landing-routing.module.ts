import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index.component';
import { LandingHomeComponent } from './landing-home/landing-home.component';

const routes: Routes = [{
  path:'',component:IndexComponent,children:[
    {
      path:'',component:LandingHomeComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
