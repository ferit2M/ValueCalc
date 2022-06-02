import { Component, OnInit } from '@angular/core';
import { FromCurrency } from 'src/app/interfaces/from-currency';
import { ValuePaper } from 'src/app/interfaces/value-paper';
import { UserService } from 'src/app/services/user/user.service';
import { ValuePaperService } from 'src/app/services/valuePaper/value-paper.service';
import { TabCommunicationService } from '../../services/tab-communication.service';

@Component({
  selector: 'app-calculator-tab',
  templateUrl: './calculator-tab.page.html',
  styleUrls: ['./calculator-tab.page.scss'],
})
export class CalculatorTabPage implements OnInit {

  constructor(private tabComm: TabCommunicationService, private valuePaperService: ValuePaperService,
    private userService: UserService
    ) { }

  paperName: string;
  loggedIn: Boolean;
  
  
  exchangeRates: FromCurrency[] = [];
  
  mainCurrency: string;
  convertingCurrency: string;
  convertingCurrencyIndex = 0;

  ngOnInit() {
    this.tabComm.exchanger.subscribe(val => {
      console.log(val);
      if (val != null)
        this.currencyChanged(val);
    });
    this.userService.loggedIn.subscribe(val=>{
      this.loggedIn = val;
    });
  }

  conversionVal: number = 1;

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

  private convertCurrency() {    
    this.buyingPrice_AltCurrency  = this.buyingPrice * this.conversionVal;
    this.spentBuying_AltCurrency = this.spentBuying * this.conversionVal;
    this.currentPrice_AltCurrency = this.currentPrice * this.conversionVal;
    this.totalWorth_AltCurrency = this.totalWorth * this.conversionVal;
    this.profit_AltCurrency = this.profit * this.conversionVal;
    this.profitTarget_AltCurrency = this.profitTarget * this.conversionVal;
    this.profitTargetSell_AltCurrency = this.profitTargetSell * this.conversionVal;
  }

  private calculateTargetProfit() {
    this.profitTargetSell = this.buyingPrice + (this.profitTarget / this.boughtShares);
    
    this.profitTarget_AltCurrency = this.profitTarget * this.conversionVal;
    this.profitTargetSell_AltCurrency = this.profitTargetSell * this.conversionVal;
  }

  private setExchangeRateForConvertingCurrencySelected() {
    this.conversionVal = this.exchangeRates[this.convertingCurrencyIndex].rate;
    this.convertingCurrency = this.exchangeRates[this.convertingCurrencyIndex].currency;
    this.calculateProfit();
  }

  currencyChanged(exchanger: { currencyName: string, fromCurrency: FromCurrency[] }) {
    this.mainCurrency = exchanger.currencyName;
    this.exchangeRates = exchanger.fromCurrency;

    this.setExchangeRateForConvertingCurrencySelected();
  }

  convertingCurrencyChanged(index: number) {
    this.convertingCurrencyIndex = index;
    this.setExchangeRateForConvertingCurrencySelected();
  }

  saveNote() {
    const paper: ValuePaper = {
      id: 0,
      buyingPrice: this.buyingPrice,
      spentBuying: this.spentBuying,
      currentPrice: this.currentPrice,
      boughtShares: this.boughtShares,
      name: this.paperName
    }

    this.valuePaperService.saveValuePaper(paper, this.userService.getLoggedUserId());
  }
}
