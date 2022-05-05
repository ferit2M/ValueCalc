import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FromCurrency } from '../interfaces/from-currency';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRatesService {

  fromUSD: BehaviorSubject<Array<FromCurrency>> = new BehaviorSubject<Array<FromCurrency>>(
    [
      {
        currency: "eur",
        rate: 0.95
      },
      {
        currency: "hrk",
        rate: 7.19
      }
    ] 
  );

  fromHRK: BehaviorSubject<Array<FromCurrency>> = new BehaviorSubject<Array<FromCurrency>>(
    [
      {
        currency: "usd",
        rate: 0.14
      },
      {
        currency: "eur",
        rate: 0.13
      }
    ]
  );

  fromEUR: BehaviorSubject<Array<FromCurrency>> = new BehaviorSubject<Array<FromCurrency>>(
    [
      {
        currency: "hrk",
        rate: 7.56
      },
      {
        currency: "usd",
        rate: 1.05
      }
    ]
  );

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
      const currency1 = this.createCurrencyObject("HRK", val.conversion_rates.HRK);
      const currency2 = this.createCurrencyObject("EUR", val.conversion_rates.EUR);
      this.fromUSD.next([currency1, currency2]);
    });
  }

  getEUR() {
    this.http.get("https://v6.exchangerate-api.com/v6/5cc6007a44fb302d3d240b3d/latest/EUR", {
    }).toPromise().then((val: any) => {
      const currency1 = this.createCurrencyObject("HRK", val.conversion_rates.HRK);
      const currency2 = this.createCurrencyObject("USD", val.conversion_rates.USD);
      this.fromEUR.next([currency1, currency2]);
    });
  }

  getHRK() {
    this.http.get("https://v6.exchangerate-api.com/v6/5cc6007a44fb302d3d240b3d/latest/HRK", {
    }).toPromise().then((val: any) => {
      const currency1 = this.createCurrencyObject("USD", val.conversion_rates.USD);
      const currency2 = this.createCurrencyObject("EUR", val.conversion_rates.EUR);
      this.fromHRK.next([currency1, currency2]);
    });
  }
}
