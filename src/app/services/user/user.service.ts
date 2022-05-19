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
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };
    this.http.post("https://localhost:44303/api/users/createuser", user, httpOptions /* {
      
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
