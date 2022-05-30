import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router) { }

  loggedIn: BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(false);

  registerUser(user: User){ 
    this.http.post("https://localhost:44303/api/users/createuser", user).toPromise().then((val: Response) => {
      this.loggedIn.next(true);
    },
    (error) => { //Error callback
      console.error('Login error ' + error.status);
      this.loggedIn.next(false);
    });
   }

   login(user: User){ 
    this.http.post("https://localhost:44303/api/users/verifyuser", user, {observe: 'response'} ).subscribe((val: any)=>{
      console.log(val.body);
      console.log(val.status);
      console.log(val.statusText);
      this.loggedIn.next(true);
    },
    (error) => { //Error callback
      console.error('Login error ' + error.status);
      this.loggedIn.next(false);
    });
  }

  logout(){
    this.loggedIn.next(false);
  }
    
    
    //.subscribe((val: {
      
  //       "message": String,
    
  //     }) => {
  //     if(val.message=="verified"){
  //       console.log("User logged in");
  //     }
  //     else if(val.message == "Wrong password"){
  //       console.log("Wrong password");
  //     }
  //   }).catch()
  //  }
}
