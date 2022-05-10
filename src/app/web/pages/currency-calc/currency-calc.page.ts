import { Component, OnInit } from '@angular/core';
import { ExchangeRatesService } from 'src/app/services/exchange-rates.service';
import { FromCurrency } from 'src/app/interfaces/from-currency';

@Component({
  selector: 'app-currency-calc',
  templateUrl: './currency-calc.page.html',
  styleUrls: ['./currency-calc.page.scss'],
})
export class CurrencyCalcPage implements OnInit {

  constructor(
    private exchangeRatesService: ExchangeRatesService
  ) { }

  ngOnInit() {
  }

  formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 4,      
    maximumFractionDigits: 4,
 });

 inputValue: string;
 outputValue: string;
 inputCurrency: string;
 outputCurrency: string;

 fromUSD: FromCurrency[] = [];
 fromEUR: FromCurrency[] = []; 
 fromHRK: FromCurrency[] = []; 

  exchangeRates: FromCurrency[] = [];
  
  convertingCurrencyIndex = 0;
  conversionVal = 1;

 private setExchangeRateForConvertingCurrencySelected() {
  this.conversionVal = this.exchangeRates[this.convertingCurrencyIndex].rate;
  this.outputCurrency = this.exchangeRates[this.convertingCurrencyIndex].currency;
  this.calculateExchange();
}

currencyChanged(exchanger: { currencyName: string, fromCurrency: FromCurrency[] }) {
  this.inputCurrency = exchanger.currencyName;
  this.exchangeRates = exchanger.fromCurrency;

  this.setExchangeRateForConvertingCurrencySelected();
}

convertingCurrencyChanged(index: number) {
  this.convertingCurrencyIndex = index;
  this.setExchangeRateForConvertingCurrencySelected();
}

  calculateExchange(){
    if(this.inputCurrency == "HRK"){
      if(this.outputCurrency == "USD"){
        this.outputValue = this.formatter.format(Number(this.inputValue) * this.conversionVal);
      }
      else if(this.outputCurrency == "EUR"){
        this.outputValue = this.formatter.format(Number(this.inputValue) * Number(this.conversionVal));
      }
      else{
        this.outputValue = this.inputValue;
      }
    }

    else if(this.inputCurrency == "USD"){
      if(this.outputCurrency == "HRK"){
        this.outputValue = this.formatter.format(Number(this.inputValue) * Number(this.conversionVal));
      }
      else if(this.outputCurrency == "EUR"){
        this.outputValue = this.formatter.format(Number(this.inputValue) * Number(this.conversionVal));
      }
      else{
        this.outputValue = this.inputValue;
      }
    }

    else if(this.inputCurrency == "EUR"){
      if(this.outputCurrency == "HRK"){
        this.outputValue = this.formatter.format(Number(this.inputValue) * Number(this.conversionVal));
      }
      else if(this.outputCurrency == "USD"){
        this.outputValue = this.formatter.format(Number(this.inputValue) * Number(this.conversionVal));
      }
      else{
        this.outputValue = this.inputValue;
      }
    }
 
    else{
      this.outputValue = this.inputValue;
    }
  }

}
