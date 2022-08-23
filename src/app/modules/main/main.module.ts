import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { IndexComponent } from './index.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TranslateModule } from '@ngx-translate/core';
import { UnAuthorizedComponent } from './un-authorized/un-authorized.component';


@NgModule({
  declarations: [
    IndexComponent,
    DashboardComponent,
    UnAuthorizedComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    TranslateModule
  ]
})
export class MainModule { }
