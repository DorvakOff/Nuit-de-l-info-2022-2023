import {Component, OnInit} from '@angular/core';
import {UserManagerService} from "../user-manager.service";
import {HttpHeaders} from "@angular/common/http";
import {NavigationService} from "../navigation.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public userManager: UserManagerService, public navigationService: NavigationService) {
  }

  ngOnInit(): void {
    let authToken = localStorage.getItem('authToken');
    if (authToken) {
      const headers = new HttpHeaders({
        'Authorization': 'Bearer ' + authToken
      })
      this.userManager.login(headers).subscribe((res) => {
        this.userManager.user = res
      }, () => {localStorage.removeItem('authToken')})
    }
  }

}
