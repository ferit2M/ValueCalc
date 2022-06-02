import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { ValuePaper } from 'src/app/interfaces/value-paper';
import { UserService } from 'src/app/services/user/user.service';
import { ValuePaperService } from 'src/app/services/valuePaper/value-paper.service';

@Component({
  selector: 'app-saved-papers-tab',
  templateUrl: './saved-papers-tab.page.html',
  styleUrls: ['./saved-papers-tab.page.scss'],
})
export class SavedPapersTabPage implements OnInit {

  constructor(private valuePaperService: ValuePaperService, private userService: UserService) { }

  papers: ValuePaper[];

  private getLoggedUserPapers() {
    const userId: number = this.userService.getLoggedUserId();
    if (userId != 0) {
      const user: User = {
        id: userId,
        username: "",
        firstName: "",
        lastName: "",
        password: ""
      };
      this.valuePaperService.getPapersForUser(user);
    }
  }

  ngOnInit() {
    this.valuePaperService.papers.subscribe(val => {
      this.papers = val;
      console.log(this.papers);
    });
    this.getLoggedUserPapers(); 
  }

  deletePaperNote(index: number) {
    console.log("index: ", index);
    console.log("this.papers[index]: ", this.papers[index]);

    this.valuePaperService.deletePaper(this.papers[index], index);
  }
}
