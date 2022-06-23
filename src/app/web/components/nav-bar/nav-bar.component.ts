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
      this.service.username.subscribe(state => {
      this.username = state;
    });


    if(this.router.url == "/web/currency-calc"){
      this.toggleCur = true;
      this.toggleHome = false;
      this.toggleLog = false;
      this.toggleVal = false;
    }
    else if(this.router.url == "/web/value-paper"){
      this.toggleCur = false;
      this.toggleHome = false;
      this.toggleLog = false;
      this.toggleVal = true;
    }
    else if(this.router.url == "/web/login"){
      this.toggleCur = false;
      this.toggleHome = false;
      this.toggleLog = true;
      this.toggleVal = false;
    }
    else{
      this.toggleCur = false;
      this.toggleHome = true;
      this.toggleLog = false;
      this.toggleVal = false;
    }

}

  isMobile: Boolean;
  loginVisible: Boolean = false;
  username: String;
  toggleCur: Boolean = false;
  toggleHome: Boolean = true;
  toggleVal: Boolean = false;
  toggleLog: Boolean = false;


  goToHomePage(event) {
    event.preventDefault();
    this.router.navigate(["home"], {replaceUrl: false});
  }

  goToCurrencyPage(event) {
    event.preventDefault();

    if (this.isMobile){ 
      this.router.navigate(["mobile/currency-calc-mobile"], {replaceUrl: false});
    }
    else{
      this.router.navigate(["web/currency-calc"], {replaceUrl: false});
    }
  
  }

  goToValueCalcPage(event) {
    event.preventDefault();
    if (this.isMobile) 
      this.router.navigate(["mobile/value-paper-mobile"], {replaceUrl: false});
    else
      this.router.navigate(["web/value-paper"], {replaceUrl: false});   
  }

  goToLoginPage(event) {
    event.preventDefault();
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
