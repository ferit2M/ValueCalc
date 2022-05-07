import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CurrenciesComponent } from 'src/app/web/components/currencies/currencies.component';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { ValuePaperMobilePageRoutingModule } from './value-paper-mobile-routing.module';
import { ValuePaperMobilePage } from './value-paper-mobile.page';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValuePaperMobilePageRoutingModule
  ],
  declarations: [ValuePaperMobilePage, NavBarComponent, CurrenciesComponent]
})
export class ValuePaperMobilePageModule {}
