import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login1',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  userLoggedIn: Boolean = false;
  logMessage: Boolean = false;
  registerMessage: Boolean = false;

  constructor(private service: UserService, private router: Router) { }

  ngOnInit() {
    this.service.loggedIn.subscribe(state => {
      this.userLoggedIn = state;
      console.log(this.userLoggedIn);
      if(this.userLoggedIn==true)
        this.router.navigate([".\home"]);
    }); 
  }

  username: string = "";
  password: string = "";
  fName: string = "";
  lName: string = "";
  // div1:boolean = false;
  // div2:boolean = true;
  registerDivVisible = false;
  //logIn200 = false;
  //value: any;

  logInClick() {
    const user: User = {
      id: 0,
      username: this.username,
      firstName: "",
      lastName: "",
      password: this.password
    }

    this.service.login(user);
      //checkLogin();
    if(this.userLoggedIn == false){
      this.registerMessage = false;
      this.logMessage = true; 
    }

    //console.log(this.userLoggedIn)
  }

  RegisterClick(){
    const user: User = {
      id: 0,
      username: this.username,
      firstName: this.fName,
      lastName: this.lName,
      password: this.password
    }

    this.service.registerUser(user);
    if(this.userLoggedIn == false){
      this.logMessage = false;
      this.registerMessage = true; 
    }
  }

  showHideRegister() {
    this.registerDivVisible = !this.registerDivVisible;
  }

}
