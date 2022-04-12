import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrencyCalcMobilePage } from './currency-calc-mobile.page';

const routes: Routes = [
  {
    path: '',
    component: CurrencyCalcMobilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurrencyCalcMobilePageRoutingModule {}
