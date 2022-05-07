import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurrenciesTabPageRoutingModule } from './currencies-tab-routing.module';

import { CurrenciesTabPage } from './currencies-tab.page';
import { CurrenciesComponent } from 'src/app/web/components/currencies/currencies.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurrenciesTabPageRoutingModule
  ],
  declarations: [CurrenciesTabPage, CurrenciesComponent]
})
export class CurrenciesTabPageModule {}
