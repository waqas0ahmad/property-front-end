import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './utils/guards/auth.guard';

const routes: Routes = [
  {
    path:'',loadChildren:()=>import("./modules/main/main.module").then(mod=>mod.MainModule)
  },
  {
    path:'account',loadChildren:()=>import("./modules/account/account.module").then(mod=>mod.AccountModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
