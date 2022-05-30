import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlatformSetService } from 'src/app/services/platform-set.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {

  constructor(
    private router: Router,
    private platformSet: PlatformSetService,
    private service: UserService
  ) { 
    this.isMobile = this.platformSet.isMobile;
  }

  ngOnInit() {
    this.service.loggedIn.subscribe(state => {
      this.loginVisible = state;
  });
}
  
  isMobile: Boolean;
  loginVisible: Boolean = false;

  goToHomePage() {
    this.router.navigate(["home"], {replaceUrl: false});
  }

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

  goToLoginPage() {
    if (this.isMobile) 
      this.router.navigate(["mobile/login"], {replaceUrl: true});
    else
      this.router.navigate(["web/login"], {replaceUrl: false});
  }

  logout(){
    this.service.logout();
    this.router.navigate(["web/login"]);
  }
}
