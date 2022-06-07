import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router, private service: UserService) { }

  loginVisible: Boolean = false;
  username: String;

  ngOnInit() {
    this.service.loggedIn.subscribe(state => {
      this.loginVisible = state;
    });
      this.service.username.subscribe(state => {
      this.username = state;
    });
  }

  goToHomePage() {
    this.router.navigate(["mobile/home-mobile"], {replaceUrl: true});
  }

  goToCurrencyPage() {
      this.router.navigate(["mobile/currency-calc-mobile"], {replaceUrl: true});
  }

  goToValueCalcPage() {
      this.router.navigate(["mobile/value-paper-mobile"], {replaceUrl: true});  
  }

  goToLoginPage() {
    this.router.navigate(["mobile/login"], {replaceUrl: true});
  }

  logout(){
    this.service.logout();
    this.router.navigate(["mobile/login"], {replaceUrl: true});
  }
}
