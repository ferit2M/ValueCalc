import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValuePaperMobilePage } from './value-paper-mobile.page';

const routes: Routes = [
  {
    path: '',
      redirectTo: 'currencySwitch',
      pathMatch: 'full'
  },
  {
    path: '',
    component: ValuePaperMobilePage,
    children: [
      {
        path: 'currencySwitch',
        loadChildren: () => import('../currencies-tab/currencies-tab.module').then( m => m.CurrenciesTabPageModule)
      },
      {
        path: 'calculator',
        loadChildren: () => import('../calculator-tab/calculator-tab.module').then( m => m.CalculatorTabPageModule)
      },
      {
        path: 'savedPapers',
        loadChildren: ()  => import('../saved-papers-tab/saved-papers-tab.module').then(m => m.SavedPapersTabPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValuePaperMobilePageRoutingModule {}
