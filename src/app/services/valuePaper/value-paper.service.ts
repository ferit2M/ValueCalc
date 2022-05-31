import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { ValuePaper } from 'src/app/interfaces/value-paper';
import { User } from 'src/app/interfaces/user';
import { BoughtPaper } from 'src/app/interfaces/bought-paper';

@Injectable({
  providedIn: 'root'
})
export class ValuePaperService {

  constructor(private http: HttpClient) { }

  papers: BehaviorSubject<Array<ValuePaper>> = new BehaviorSubject<Array<ValuePaper>>([]);

  getPapersForUser(user: User) {
    this.http.post("https://localhost:44303/api/valuepapers/GetPapersForUser", user).toPromise().then((arr: Array<ValuePaper>) => {
      console.log(arr);
      this.papers.next(arr);
    },
    (error) => { //Error callback
      console.error('Login error ' + error.status);
    });
  }

  saveValuePaper(valuePaper: ValuePaper, userId: number) {
    this.http.post("https://localhost:44303/api/valuepapers/SaveValuePaper", valuePaper).toPromise().then((res: ValuePaper) => {
      console.log(res);
      this.savePaperWithUser({ userId: userId, paperId: res.id });
    },
    (error) => { //Error callback
      console.error('Login error ' + error.status);
    });
  }

  private savePaperWithUser(boughtPaper: BoughtPaper) {
    this.http.post("https://localhost:44303/api/valuepapers/SavePaperWithUser", boughtPaper).toPromise().then((res: Response) => {
      console.log("Bought paper saved");
    },
    (error) => { //Error callback
      console.error('Login error ' + error.status);
    });
  }

  deletePaper() {
    this.http.post("https://localhost:44303/api/valuepapers/SavePaperWithUser", {}).toPromise().then((res: Response) => {
      console.log(res); // should return: Record has successfully Deleted
    },
    (error) => { //Error callback
      console.error('Login error ' + error.status);
    });
  }
}
