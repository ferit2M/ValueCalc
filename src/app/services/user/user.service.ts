import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  loggedIn: boolean = false;

  

  registerUser(user: User){ 
    this.http.post("https://localhost:44303/api/users/createuser", user /* {
      
        "id": 0,
        "username": ,
        "firstName": "new",
        "lastName": "new",
        "password": "new"
    
    } */).toPromise().then((val: Response) => {
      console.log(val);
    });
   }

   login(user: User){ 
    this.http.post("https://localhost:44303/api/users/verifyuser", user, {observe: 'response'} ).subscribe((val: any)=>{
      console.log(val.body);
      console.log(val.status);
      console.log(val.statusText);
      if (val.status == 200) {
        console.log("Logged in");
        this.loggedIn = true;
      }
      else {
        console.log("Wrong credentials");
      }
      
    },
    (error) => {                              //Error callback
      console.error('error caught in component');
      console.log(error.status)
      //throw error;   //You can also throw the error to a global error handler
    });
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
