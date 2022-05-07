import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalculatorTabPage } from './calculator-tab.page';

const routes: Routes = [
  {
    path: '',
    component: CalculatorTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalculatorTabPageRoutingModule {}
