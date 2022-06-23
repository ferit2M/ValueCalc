import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
      {
        path: 'login',
        loadChildren: () => import('./web/pages/login/login.module').then( m => m.LoginPageModule)
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
        path: 'login',
        loadChildren: () => import('./mobile/pages/login/login.module').then( m => m.LoginPageModule)
      },
      // {
      //   path: 'home',
      //   loadChildren: () => import('./mobile/pages/home-mobile/home-mobile.module').then( m => m.HomeMobilePageModule)
      // },
      {
        path: '**',
        loadChildren: () => import('./mobile/pages/home-mobile/home-mobile.module').then(m => m.HomeMobilePageModule)
      }
    ]
  },
  {
    path: '**',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },  {
    path: 'saved-papers-tab',
    loadChildren: () => import('./mobile/pages/saved-papers-tab/saved-papers-tab.module').then( m => m.SavedPapersTabPageModule)
  },/*
  {
    path: 'calculator-tab',
    loadChildren: () => import('./mobile/pages/calculator-tab/calculator-tab.module').then( m => m.CalculatorTabPageModule)
  },
  {
    path: 'currencies-tab',
    loadChildren: () => import('./mobile/pages/currencies-tab/currencies-tab.module').then( m => m.CurrenciesTabPageModule)
  },*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
