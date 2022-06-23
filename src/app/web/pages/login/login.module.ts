import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { ComponentsMobileModule } from 'src/app/components/components-mobile/components-mobile.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule
  ],
  declarations: [LoginPage, NavBarComponent, LoginComponent]
})
export class LoginPageModule {}
