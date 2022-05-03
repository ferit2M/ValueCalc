import { Component, OnInit } from '@angular/core';
import { ExchangeRatesService } from 'src/app/services/exchange-rates.service';

@Component({
  selector: 'app-currency-calc',
  templateUrl: './currency-calc.page.html',
  styleUrls: ['./currency-calc.page.scss'],
})
export class CurrencyCalcPage implements OnInit {

  inputValue: string;
  outputValue: string;
  inputCurrency: string;
  outputCurrency: string;

  usdHrk: number;
  usdEur: number;
  hrkEur: number;
  hrkUsd: number;
  eurHrk: number;
  eurUsd: number;

  constructor(
    private exchangeRatesService: ExchangeRatesService
  ) { }

  ngOnInit() {
    /* this.httpService.getRequest("https://v6.exchangerate-api.com/v6/5cc6007a44fb302d3d240b3d/latest/USD").subscribe((response)=>{
     this.usdHrk = response.conversion_rates.HRK;
     this.usdEur = response.conversion_rates.EUR;
   }).unsubscribe;
   this.httpService.getRequest("https://v6.exchangerate-api.com/v6/5cc6007a44fb302d3d240b3d/latest/EUR").subscribe((response)=>{
     this.eurHrk = response.conversion_rates.HRK;
     this.eurUsd = response.conversion_rates.USD;
   }).unsubscribe;
   this.httpService.getRequest("https://v6.exchangerate-api.com/v6/5cc6007a44fb302d3d240b3d/latest/HRK").subscribe((response)=>{
     this.hrkEur = response.conversion_rates.EUR;
     this.hrkUsd = response.conversion_rates.USD;
   }).unsubscribe; */

    this.exchangeRatesService.usdHrk.subscribe(val => {
      this.usdHrk = val;
    });
    this.exchangeRatesService.usdEur.subscribe(val => {
      this.usdEur = val;
    });
    this.exchangeRatesService.eurHrk.subscribe(val => {
      this.eurHrk = val;
    });
    this.exchangeRatesService.eurUsd.subscribe(val => {
      this.eurUsd = val;
    });
    this.exchangeRatesService.hrkEur.subscribe(val => {
      this.hrkEur = val;
    });
    this.exchangeRatesService.hrkUsd.subscribe(val => {
      this.hrkUsd = val;
    });
  }

  formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 4,      
    maximumFractionDigits: 4,
 });

  calculateExchange(){
    if(this.inputCurrency == "hrk"){
      if(this.outputCurrency == "usd"){
        this.outputValue = this.formatter.format(Number(this.inputValue) * Number(this.hrkUsd));
      }
      else if(this.outputCurrency == "eur"){
        this.outputValue = this.formatter.format(Number(this.inputValue) * Number(this.hrkUsd));
      }
      else{
        this.outputValue = this.inputValue;
      }
    }

    else if(this.inputCurrency == "usd"){
      if(this.outputCurrency == "hrk"){
        this.outputValue = this.formatter.format(Number(this.inputValue) * Number(this.usdHrk));
      }
      else if(this.outputCurrency == "eur"){
        this.outputValue = this.formatter.format(Number(this.inputValue) * Number(this.usdEur));
      }
      else{
        this.outputValue = this.inputValue;
      }
    }

    else if(this.inputCurrency == "eur"){
      if(this.outputCurrency == "hrk"){
        this.outputValue = this.formatter.format(Number(this.inputValue) * Number(this.eurHrk));
      }
      else if(this.outputCurrency == "usd"){
        this.outputValue = this.formatter.format(Number(this.inputValue) * Number(this.eurUsd));
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
