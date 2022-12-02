import {Component} from '@angular/core';
import {NavigationService} from "../navigation.service";
import {UserManagerService} from "../user-manager.service";

@Component({
  selector: 'app-plateau', templateUrl: './plateau.component.html', styleUrls: ['./plateau.component.css']
})
export class PlateauComponent {

  res = 0;

  constructor(private navigationService: NavigationService, private userManager: UserManagerService) {
    if (!userManager.user) {
      localStorage.setItem('redirect', '/game')
      navigationService.navigate("/login")
    }
  }

  updateRes(res: number) {
    this.res = res;
  }

}
