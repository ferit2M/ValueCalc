import { Component,  OnInit } from '@angular/core';
import { FromCurrency } from 'src/app/interfaces/from-currency';
import { TabCommunicationService } from '../../services/tab-communication.service';

@Component({
  selector: 'app-currencies-tab',
  templateUrl: './currencies-tab.page.html',
  styleUrls: ['./currencies-tab.page.scss'],
})
export class CurrenciesTabPage implements OnInit {

  constructor(private tabComm: TabCommunicationService) { }

  ngOnInit() {
    
  }

  currencyChanged(exchanger: { currencyName: string, fromCurrency: FromCurrency[] }) {
    this.tabComm.changeCurrency(exchanger);
  }
}
