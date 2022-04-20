import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-value-paper',
  templateUrl: './value-paper.page.html',
  styleUrls: ['./value-paper.page.scss'],
})
export class ValuePaperPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  USD_HRK: number = 6.37;
  conversionVal: number = 6.37;

  profit: number = 0;
  totalWorth: number = 0;

  
  buyingPrice: number;
  spentBuying: number;
  currentPrice: number;

  boughtShares: number;
  
  buyingPrice_AltCurrency: number;
  spentBuying_AltCurrency: number;
  currentPrice_AltCurrency: number;
  profit_AltCurrency: number;
  totalWorth_AltCurrency: number;

  profitTarget: number;
  profitTargetSell: number;
  profitTarget_AltCurrency: number;
  profitTargetSell_AltCurrency: number;

  calculateProfit() {
    this.boughtShares = this.spentBuying / this.buyingPrice;
    this.totalWorth = this.boughtShares * this.currentPrice;
    this.profit = this.totalWorth - this.spentBuying;
    this.convertCurrency();
    this.calculateTargetProfit();
  }

  calculateProfitUsingShares() {
    this.spentBuying = this.buyingPrice * this.boughtShares;
    this.totalWorth = this.boughtShares * this.currentPrice;
    this.profit = this.totalWorth - this.spentBuying;
    this.convertCurrency();
    this.calculateTargetProfit();
  }

  convertCurrency() {    
    this.buyingPrice_AltCurrency  = this.buyingPrice * this.conversionVal;
    this.spentBuying_AltCurrency = this.spentBuying * this.conversionVal;
    this.currentPrice_AltCurrency = this.currentPrice * this.conversionVal;
    this.totalWorth_AltCurrency = this.totalWorth * this.conversionVal;
    this.profit_AltCurrency = this.profit * this.conversionVal;
    this.profitTarget_AltCurrency = this.profitTarget * this.conversionVal;
    this.profitTargetSell_AltCurrency = this.profitTargetSell * this.conversionVal;
  }

  calculateTargetProfit() {
    this.profitTargetSell = this.buyingPrice + (this.profitTarget / this.boughtShares);
    
    this.profitTarget_AltCurrency = this.profitTarget * this.conversionVal;
    this.profitTargetSell_AltCurrency = this.profitTargetSell * this.conversionVal;
  }

}
