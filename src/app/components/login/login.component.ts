import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user/user.service';


@Component({
  selector: 'app-login1',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loggedIn = false;

  constructor(private service: UserService) { }

  ngOnInit() {
   /*  this.service._loggedIn.subscribe(state => {
      this.loggedIn = state;
    }); */
  }

  username: string = "";
  password: string = "";
  fName: string = "";
  lName: string = "";
  div1:boolean = false;
  div2:boolean = true;
  registerDivVisible = false;
  

  logInClick() {
    console.log("username: ", this.username);
    console.log("password: ", this.password);

    //this.service.login(this.username, this.password);
  }

  RegisterClick(){
    const user: User = {
      Id: 0,
      username: this.username,
      firstName: this.fName,
      lastName: this.lName,
      password: this.password
    }

    this.service.registerUser(user);
    
  }

  div1Function() {
    this.registerDivVisible = !this.registerDivVisible;
  }

}
