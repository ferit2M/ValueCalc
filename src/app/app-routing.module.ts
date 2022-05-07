import { NgModule } from '@angular/core';
import { ChildrenOutletContexts, PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "web",
    children: [
      {
        path: 'currency-calc',
        loadChildren: () => import('./web/pages/currency-calc/currency-calc.module').then( m => m.CurrencyCalcPageModule)
      },
      {
        path: 'value-paper',
        loadChildren: () => import('./web/pages/value-paper/value-paper.module').then( m => m.ValuePaperPageModule)
      },
    ]
  },
  {
    path: "mobile",
    children: [
      {
        path: 'currency-calc-mobile',
        loadChildren: () => import('./mobile/pages/currency-calc-mobile/currency-calc-mobile.module').then( m => m.CurrencyCalcMobilePageModule)
      },
      {
        path: 'value-paper-mobile',
        loadChildren: () => import('./mobile/pages/value-paper-mobile/value-paper-mobile.module').then( m => m.ValuePaperMobilePageModule)
      },
      {
        path: '**',
        loadChildren: () => import('./mobile/pages/home-mobile/home-mobile.module').then(m => m.HomeMobilePageModule)
      }
    ]
  },
  {
    path: '**',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },  {
    path: 'calculator-tab',
    loadChildren: () => import('./mobile/pages/calculator-tab/calculator-tab.module').then( m => m.CalculatorTabPageModule)
  },
  {
    path: 'currencies-tab',
    loadChildren: () => import('./mobile/pages/currencies-tab/currencies-tab.module').then( m => m.CurrenciesTabPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
