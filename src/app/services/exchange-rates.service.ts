import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FromCurrency } from '../interfaces/from-currency';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRatesService {

  usdHrk: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  usdEur: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  hrkEur: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  hrkUsd: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  eurHrk: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  eurUsd: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  fromUSD: BehaviorSubject<Array<FromCurrency>> = new BehaviorSubject<Array<FromCurrency>>([]);
  fromHRK: BehaviorSubject<Array<FromCurrency>> = new BehaviorSubject<Array<FromCurrency>>([]);
  fromEUR: BehaviorSubject<Array<FromCurrency>> = new BehaviorSubject<Array<FromCurrency>>([]);

  constructor(private http: HttpClient) { 
    this.getUSD();
    this.getEUR();
    this.getHRK();
  }

  createCurrencyObject(currency: string, rate: number): FromCurrency {
    let temp = <FromCurrency>{ };
    temp.currency = currency;
    temp.rate = rate;
    return temp;
  }

  getUSD() {
    this.http.get("https://v6.exchangerate-api.com/v6/5cc6007a44fb302d3d240b3d/latest/USD", {
    }).toPromise().then((val: any) => {
      console.log(val);
      this.usdHrk.next(val.conversion_rates.HRK);
      this.usdEur.next(val.conversion_rates.EUR);

      // novi način
      const currency1 = this.createCurrencyObject("HRK", val.conversion_rates.HRK);
      const currency2 = this.createCurrencyObject("EUR", val.conversion_rates.EUR);
      this.fromUSD.next([currency1, currency2]);
    });
  }

  getEUR() {
    this.http.get("https://v6.exchangerate-api.com/v6/5cc6007a44fb302d3d240b3d/latest/EUR", {
    }).toPromise().then((val: any) => {
      console.log(val);
      this.eurHrk.next(val.conversion_rates.HRK);
      this.eurUsd.next(val.conversion_rates.USD);

      // novi način
      const currency1 = this.createCurrencyObject("HRK", val.conversion_rates.HRK);
      const currency2 = this.createCurrencyObject("USD", val.conversion_rates.USD);
      this.fromEUR.next([currency1, currency2]);
    });
  }

  getHRK() {
    this.http.get("https://v6.exchangerate-api.com/v6/5cc6007a44fb302d3d240b3d/latest/HRK", {
    }).toPromise().then((val: any) => {
      console.log(val);
      this.hrkUsd.next(val.conversion_rates.USD);
      this.hrkEur.next(val.conversion_rates.EUR);

      // novi način
      const currency1 = this.createCurrencyObject("USD", val.conversion_rates.USD);
      const currency2 = this.createCurrencyObject("EUR", val.conversion_rates.EUR);
      this.fromHRK.next([currency1, currency2]);
    });
  }
}
