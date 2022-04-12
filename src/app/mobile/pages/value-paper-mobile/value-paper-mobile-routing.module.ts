import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValuePaperMobilePage } from './value-paper-mobile.page';

const routes: Routes = [
  {
    path: '',
    component: ValuePaperMobilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValuePaperMobilePageRoutingModule {}
