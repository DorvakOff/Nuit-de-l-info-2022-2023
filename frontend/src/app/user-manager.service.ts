import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})
export class UserManagerService {

  user?: User
  token?: string
  authLoading: boolean = false

  constructor(private router: Router, private http: HttpClient) {
    this.token = localStorage.getItem('authToken') || ''
  }

  logout() {
    this.authLoading = false
    localStorage.removeItem("authToken")
    this.router.navigate(['/'])
    this.user = undefined
    this.token = undefined
  }

  login(headers: {}): Observable<User> {
    return this.http.get<User>("/api/users/@me", {headers: headers})
  }
}

