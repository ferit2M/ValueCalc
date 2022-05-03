import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PlatformSetService } from '../services/platform-set.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private router: Router,
    private platformSet: PlatformSetService
  ) {
    this.isMobile = this.platformSet.isMobile;
  }
  
  isMobile: Boolean;
  
  goToCurrencyPage() {
    
    if (this.isMobile) 
      this.router.navigate(["mobile/currency-calc-mobile"], {replaceUrl: false});
    else
      this.router.navigate(["web/currency-calc"], {replaceUrl: false});
  }

  goToValueCalcPage() {
    if (this.isMobile) 
      this.router.navigate(["mobile/value-paper-mobile"], {replaceUrl: false});
    else
      this.router.navigate(["web/value-paper"], {replaceUrl: false});   
  }
}
