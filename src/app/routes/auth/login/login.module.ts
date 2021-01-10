import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { SharedModule } from '../../shared/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [LoginFormComponent],
  imports: [
    LoginRoutingModule,
    SharedModule,
    CommonModule
  ]
})
export class LoginModule { }
