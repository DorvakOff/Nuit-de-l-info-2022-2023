import {Component} from '@angular/core';
import {GetDataQuestionService} from "../get-data-question.service";
import {UserManagerService} from "../user-manager.service";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {

  constructor(public service: GetDataQuestionService, public userManager: UserManagerService) {
  }
}
