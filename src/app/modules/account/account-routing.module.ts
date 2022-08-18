import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { IndexComponent } from './index.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '', component: IndexComponent, children: [
      {
        path: '', component: LoginComponent
      },
      {
        path: 'create', component: CreateComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
