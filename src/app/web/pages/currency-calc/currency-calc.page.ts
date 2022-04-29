import { Component, OnInit } from '@angular/core';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-currency-calc',
  templateUrl: './currency-calc.page.html',
  styleUrls: ['./currency-calc.page.scss'],
})
export class CurrencyCalcPage implements OnInit {

  inputValue: number;
  outputValue: number;
  inputCurrency: string;
  outputCurrency: string;

  hrkUsd: number = 7.17;
  hrkEur: number = 7.56;
  eurUsd: number = 1.05;

  constructor() { }

  ngOnInit() {
  }

  handleEvent(){
    console.log(this.inputCurrency);
  }

  calculateExchange(){
    if(this.inputCurrency == "hrk" && this.outputCurrency == "usd"){
      this.outputValue = this.inputValue / this.hrkUsd;
    }
    else if(this.inputCurrency == "usd" && this.outputCurrency == "hrk"){
      this.outputValue = this.inputValue * this.hrkUsd;
    }
    else if(this.inputCurrency == "hrk" && this.outputCurrency == "eur"){
      this.outputValue = this.inputValue / this.hrkEur;
    }
    else if(this.inputCurrency == "eur" && this.outputCurrency == "hrk"){
      this.outputValue = this.inputValue * this.hrkEur;
    }
    else if(this.inputCurrency == "usd" && this.outputCurrency == "eur"){
      this.outputValue = this.inputValue / this.eurUsd;
    }
    else if(this.inputCurrency == "eur" && this.outputCurrency == "usd"){
      this.outputValue = this.inputValue * this.eurUsd;
    }

  }

}
