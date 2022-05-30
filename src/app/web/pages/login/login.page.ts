import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  isUserLogged: Boolean = false;

  ngOnInit() {
    this.userService.loggedIn.subscribe(state => {
      this.isUserLogged = state
    }); 
  }

}
