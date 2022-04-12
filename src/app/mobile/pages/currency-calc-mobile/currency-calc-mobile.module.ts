import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurrencyCalcMobilePageRoutingModule } from './currency-calc-mobile-routing.module';

import { CurrencyCalcMobilePage } from './currency-calc-mobile.page';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurrencyCalcMobilePageRoutingModule
  ],
  declarations: [CurrencyCalcMobilePage, NavBarComponent]
})
export class CurrencyCalcMobilePageModule {}
