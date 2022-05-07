import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrenciesTabPage } from './currencies-tab.page';

const routes: Routes = [
  {
    path: '',
    component: CurrenciesTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurrenciesTabPageRoutingModule {}
