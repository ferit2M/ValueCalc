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
    this.http.post("https://localhost:44303/api/valuepapers/GetPapersForUser", user).subscribe((res: ValuePaper[]) => {
      if (res.length > 0) {
        this.papers.next(res);
      }
    },
    (error) => { //Error callback
      console.error(error.status);
      this.papers.next([]);
    });
  }

  saveValuePaper(valuePaper: ValuePaper, userId: number) {
    this.http.post("https://localhost:44303/api/valuepapers/SaveValuePaper", valuePaper).toPromise().then((res: ValuePaper) => {
      console.log(res);
      this.savePaperWithUser({ userId: userId, paperId: res.id });
    },
    (error) => { //Error callback
      console.error('saveValuePaper error ' + error.status);
    });
  }

  private savePaperWithUser(boughtPaper: BoughtPaper) {
    this.http.post("https://localhost:44303/api/valuepapers/SavePaperWithUser", boughtPaper).toPromise().then((res: Response) => {
      console.log("Bought paper saved");
      this.papers.next([]);
      this.getPapersForUser({
        id: boughtPaper.userId,
        username: "",
        firstName: "",
        lastName: "",
        password: ""
      });
    },
    (error) => { //Error callback
      console.error('savePaperWithUser error ' + error.status);
    });
  }

  deletePaper(paper: ValuePaper, index: number) {
    this.http.post("https://localhost:44303/api/valuepapers/DeletePaper", paper).toPromise().then((res: Response) => {
      console.log(res);

      let arr: ValuePaper[] = this.papers.getValue();
      arr.splice(index, 1);
      this.papers.next(arr);
    },
    (error) => { //Error callback
      console.error(error.status);
    });
  }
}
