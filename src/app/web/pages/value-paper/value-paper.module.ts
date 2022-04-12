import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValuePaperPageRoutingModule } from './value-paper-routing.module';

import { ValuePaperPage } from './value-paper.page';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValuePaperPageRoutingModule
  ],
  declarations: [ValuePaperPage, NavBarComponent]
})
export class ValuePaperPageModule {}
