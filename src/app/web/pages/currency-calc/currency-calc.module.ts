import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurrencyCalcPageRoutingModule } from './currency-calc-routing.module';

import { CurrencyCalcPage } from './currency-calc.page';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurrencyCalcPageRoutingModule
  ],
  declarations: [CurrencyCalcPage, NavBarComponent]
})
export class CurrencyCalcPageModule {}
