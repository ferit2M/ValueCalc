import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FromCurrency } from 'src/app/interfaces/from-currency';

@Injectable({
  providedIn: 'root'
})
export class TabCommunicationService {

  constructor() { }

  exchanger: BehaviorSubject<{ currencyName: string, fromCurrency: FromCurrency[] }> = new BehaviorSubject<{ currencyName: string, fromCurrency: FromCurrency[] }>(null);

  changeCurrency(exchanger: { currencyName: string, fromCurrency: FromCurrency[] }) {
    this.exchanger.next(exchanger);
  }
}
