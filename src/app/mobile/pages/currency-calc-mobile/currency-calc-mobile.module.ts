import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurrencyCalcMobilePageRoutingModule } from './currency-calc-mobile-routing.module';

import { CurrencyCalcMobilePage } from './currency-calc-mobile.page';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { CurrenciesComponent } from 'src/app/web/components/currencies/currencies.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurrencyCalcMobilePageRoutingModule
  ],
  declarations: [CurrencyCalcMobilePage, NavBarComponent, CurrenciesComponent]
})
export class CurrencyCalcMobilePageModule {}
