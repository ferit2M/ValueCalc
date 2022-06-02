import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SavedPapersTabPage } from './saved-papers-tab.page';

const routes: Routes = [
  {
    path: '',
    component: SavedPapersTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SavedPapersTabPageRoutingModule {}
