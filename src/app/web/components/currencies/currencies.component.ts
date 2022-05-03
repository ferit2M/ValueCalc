import { Component, OnInit } from '@angular/core';
import { FromCurrency } from 'src/app/interfaces/from-currency';
import { ExchangeRatesService } from 'src/app/services/exchange-rates.service';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.scss'],
})
export class CurrenciesComponent implements OnInit {

  constructor(private exchangeRatesService: ExchangeRatesService) { }

  fromUSD: FromCurrency[] = [];
  fromEUR: FromCurrency[] = []; 
  fromHRK: FromCurrency[] = []; 

  ngOnInit() {
    this.exchangeRatesService.fromUSD.subscribe(val => {
      this.fromUSD = val;
    })
    this.exchangeRatesService.fromEUR.subscribe(val => {
      this.fromEUR = val;
    })
    this.exchangeRatesService.fromHRK.subscribe(val => {
      this.fromHRK = val;
    })

    console.log(this.fromEUR);
    console.log(this.fromHRK);
    console.log(this.fromUSD);    
  }
}
