import {Component} from '@angular/core';
import {UserManagerService} from "../user-manager.service";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {

  constructor(public userManager: UserManagerService) {
  }
}
