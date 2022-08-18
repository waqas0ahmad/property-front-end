import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { IndexComponent } from './index.component';
import { CreateComponent } from './create/create.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    IndexComponent,
    CreateComponent,
    LoginComponent
  ],
  imports: [
    AccountRoutingModule,
    CommonModule,
    FormsModule,
    SharedModule,
    TranslateModule
  ]
})
export class AccountModule { 


}
