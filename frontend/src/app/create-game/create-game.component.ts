import {Component} from '@angular/core';
import {GetDataQuestionService} from "../get-data-question.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css']
})
export class CreateGameComponent {

  constructor(private getDataQuestionService: GetDataQuestionService, private router: Router) {
    this.getDataQuestionService.createGame().subscribe(id => {
      this.router.navigateByUrl('/game/' + id);
    })
  }

}
