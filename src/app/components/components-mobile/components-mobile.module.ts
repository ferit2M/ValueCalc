import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrenciesComponent } from 'src/app/web/components/currencies/currencies.component';



@NgModule({
  declarations: [CurrenciesComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CurrenciesComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsMobileModule { }
