import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency-calc-mobile',
  templateUrl: './currency-calc-mobile.page.html',
  styleUrls: ['./currency-calc-mobile.page.scss'],
})
export class CurrencyCalcMobilePage implements OnInit {

  formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 4,      
    maximumFractionDigits: 4,
 });

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
    
  ) { }

  ngOnInit() {
    
  }

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
