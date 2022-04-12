import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValuePaperPage } from './value-paper.page';

const routes: Routes = [
  {
    path: '',
    component: ValuePaperPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValuePaperPageRoutingModule {}
