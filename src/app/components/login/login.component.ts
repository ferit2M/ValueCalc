import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';
import { PlatformSetService } from 'src/app/services/platform-set.service';

@Component({
  selector: 'app-login1',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  userLoggedIn: Boolean = false;
  logMessage: Boolean = false;
  registerMessage: Boolean = false;

  constructor(private service: UserService, private router: Router, private platformService: PlatformSetService) { }

  ngOnInit() {
    this.service.loggedIn.subscribe(state => {
      this.userLoggedIn = state;
      console.log(this.userLoggedIn);
      if(this.userLoggedIn==true)
      {
        console.log("isMobile login component: ", this.platformService.isMobile)
        if (this.platformService.isMobile)
          this.router.navigate(["mobile/home"], {replaceUrl: true});
        else
          this.router.navigate(["home"], {replaceUrl: true});
      }
    }); 
  }

  username: string = "";
  password: string = "";
  fName: string = "";
  lName: string = "";
  registerDivVisible = false;


  logInClick() {
    const user: User = {
      id: 0,
      username: this.username,
      firstName: "",
      lastName: "",
      password: this.password
    }

    this.service.login(user).then(
      (val) => { 
        console.log(val)
      },
      (err) => {
        this.registerMessage = false;
        this.logMessage = true; 
      }
    );
  }

  RegisterClick(){
    const user: User = {
      id: 0,
      username: this.username,
      firstName: this.fName,
      lastName: this.lName,
      password: this.password
    }

    this.service.registerUser(user).then(
      (val) => { 
        console.log(val)
      },
      (err) => {
        this.registerMessage = true;
        this.logMessage = false; 
      }
    );
  }

  showHideRegister() {
    this.registerDivVisible = !this.registerDivVisible;
  }

}
