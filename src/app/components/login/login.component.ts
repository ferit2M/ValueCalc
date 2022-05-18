import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login1',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loggedIn = false;

  constructor() { }
  //constructor(private service: UserService) { }

  ngOnInit() {
   /*  this.service._loggedIn.subscribe(state => {
      this.loggedIn = state;
    }); */
  }

  username: string = "";
  password: string = "";

  showRegistration:boolean = false;
  

  logInClick() {
    console.log("username: ", this.username);
    console.log("password: ", this.password);

    //this.service.login(this.username, this.password);
  }

}
