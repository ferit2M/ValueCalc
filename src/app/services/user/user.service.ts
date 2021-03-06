import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  loggedIn: BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(false);
  username: BehaviorSubject<string> = new BehaviorSubject<string>("");

  userId: number = 0;

  registerUser(user: User){ 
  return new Promise((resolve, reject) =>{ 
    this.http.post("https://localhost:44303/api/users/createuser", user).toPromise().then((val: User) => {
      this.loggedIn.next(true);
      this.userId = val.id;
      this.username.next(user.username)
      resolve("Registration done")
    },
    (error) => { //Error callback
      console.error('Login error ' + error.status);
      this.loggedIn.next(false);
      reject("Registration failed")
    });
  });
  }

   login(user: User){ 

     return new Promise((resolve, reject) =>{
      this.http.post("https://localhost:44303/api/users/verifyuser", user).toPromise().then((val: User)=>{
        this.loggedIn.next(true);
        this.userId = val.id;
        this.username.next(user.username)
        resolve("Login done");
    },
    (error) =>{
      this.loggedIn.next(false);
      reject("Login error" + error.status);
    });
    });  
  }

  logout(){
    this.loggedIn.next(false);
    this.userId = 0;
  }
    
  getLoggedUserId(): number {
    return this.userId;
  }  
}
