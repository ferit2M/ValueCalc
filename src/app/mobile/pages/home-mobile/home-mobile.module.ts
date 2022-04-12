import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeMobilePageRoutingModule } from './home-mobile-routing.module';

import { HomeMobilePage } from './home-mobile.page';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeMobilePageRoutingModule
  ],
  declarations: [HomeMobilePage, NavBarComponent]
})
export class HomeMobilePageModule {}
