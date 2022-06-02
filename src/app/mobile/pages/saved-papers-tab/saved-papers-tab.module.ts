import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SavedPapersTabPageRoutingModule } from './saved-papers-tab-routing.module';

import { SavedPapersTabPage } from './saved-papers-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SavedPapersTabPageRoutingModule
  ],
  declarations: [SavedPapersTabPage]
})
export class SavedPapersTabPageModule {}
