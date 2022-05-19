import { HttpClient } from '@angular/common/http';
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
}
