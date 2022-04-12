import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValuePaperMobilePageRoutingModule } from './value-paper-mobile-routing.module';

import { ValuePaperMobilePage } from './value-paper-mobile.page';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValuePaperMobilePageRoutingModule
  ],
  declarations: [ValuePaperMobilePage, NavBarComponent]
})
export class ValuePaperMobilePageModule {}
