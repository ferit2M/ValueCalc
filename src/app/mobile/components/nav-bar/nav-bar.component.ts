import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {

  

  constructor(private router: Router) { }

  ngOnInit() {}

  goToHomePage() {
    this.router.navigate(["mobile/home-mobile"], {replaceUrl: true});
  }

  goToCurrencyPage() {
      this.router.navigate(["mobile/currency-calc-mobile"], {replaceUrl: true});
  }

  goToValueCalcPage() {
      this.router.navigate(["mobile/value-paper-mobile"], {replaceUrl: true});  
  }

  loginClick() {
    
  }

}
