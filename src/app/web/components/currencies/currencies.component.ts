import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

  currenciesArray: string[] = ["USD", "EUR", "HRK"];

  @Output() exchanger = new EventEmitter<{ currencyName: string, fromCurrency: FromCurrency[] }>();

  ngOnInit() {
    this.exchangeRatesService.fromUSD.subscribe(val => {
      this.fromUSD = val;
      this.setFirstRate("USD", this.fromUSD);
    })

    this.exchangeRatesService.fromEUR.subscribe(val => {
      this.fromEUR = val;
    })

    this.exchangeRatesService.fromHRK.subscribe(val => {
      this.fromHRK = val;
    })
  }

  private setFirstRate(currencyName: string, fromCurrency: FromCurrency[]) {
    this.exchanger.emit(this.createExchangerObject(currencyName, fromCurrency));
  }

  createExchangerObject(currencyName: string, fromCurrency: FromCurrency[]): { currencyName: string, fromCurrency: FromCurrency[] } {
    const temp = {
      currencyName: currencyName,
      fromCurrency: fromCurrency
    }
    return temp;
  }

  changeCurrency(currencyName: string) {
    if (currencyName === "USD")
    {
      this.exchanger.emit(this.createExchangerObject(currencyName, this.fromUSD));      
    }
    else if (currencyName === "EUR")
    {
      this.exchanger.emit(this.createExchangerObject(currencyName, this.fromEUR));      
    }
    else if (currencyName === "HRK")
    {
      this.exchanger.emit(this.createExchangerObject(currencyName, this.fromHRK));            
    }
  }
}
