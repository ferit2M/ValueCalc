import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalculatorTabPageRoutingModule } from './calculator-tab-routing.module';

import { CalculatorTabPage } from './calculator-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalculatorTabPageRoutingModule
  ],
  declarations: [CalculatorTabPage]
})
export class CalculatorTabPageModule {}
