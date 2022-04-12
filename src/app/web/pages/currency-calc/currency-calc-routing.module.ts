import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrencyCalcPage } from './currency-calc.page';

const routes: Routes = [
  {
    path: '',
    component: CurrencyCalcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurrencyCalcPageRoutingModule {}
