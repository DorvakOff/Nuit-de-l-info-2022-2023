import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {NavigationService} from "../navigation.service";
import {UserManagerService} from "../user-manager.service";

@Component({
  selector: 'app-login-page', templateUrl: './login-page.component.html', styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private navigationService: NavigationService, private route: ActivatedRoute, private http: HttpClient, private userService: UserManagerService) {
    let redirect: string = localStorage.getItem("redirect") || "/"
    if (localStorage.getItem("authToken")) {
      let headers = new HttpHeaders({
        Authorization: "Bearer " + localStorage.getItem("authToken")
      })
      userService.authLoading = true
      userService.login(headers).subscribe((res) => {
        userService.user = res
        navigationService.navigate(redirect)
        userService.authLoading = false
      }, () => {
        localStorage.removeItem("authToken")
        userService.authLoading = false
        window.location.href = "https://discord.com/api/oauth2/authorize?client_id=1047953729283960933&redirect_uri=" + this.getRedirectUri() + "/login&response_type=token&scope=identify%20email&prompt=none"
      })
    } else {
      let query = window.location.href.split('#')[1]
      let params = new URLSearchParams(query)
      let token = params.get("access_token")
      if (token) {
        const headers = new HttpHeaders({
          'Authorization': `Bearer ${token}`, 'Content-Type': 'text/plain; charset=utf-8'
        })
        userService.authLoading = true
        this.http.post<any>("/api/users/login", {}, {
          headers: headers, responseType: 'text' as 'json'
        }).subscribe((res) => {
          localStorage.setItem("authToken", res)
          localStorage.removeItem("redirect")
          window.location.href = this.getRedirectUri() + redirect
          userService.authLoading = false
        }, () => {
          userService.authLoading = false
          window.location.href = "https://discord.com/api/oauth2/authorize?client_id=1047953729283960933&redirect_uri=" + this.getRedirectUri() + "/login&response_type=token&scope=identify%20email&prompt=none"
        })
      } else {
        let error = params.get("error")
        let description = params.get("error_description")
        if (error == 'access_denied') {
          if (description) console.log(description)
          navigationService.navigate('/')
        } else {
          window.location.href = "https://discord.com/api/oauth2/authorize?client_id=1047953729283960933&redirect_uri=" + this.getRedirectUri() + "/login&response_type=token&scope=identify%20email&prompt=none"
        }
      }
    }
  }

  ngOnInit(): void {
  }

  getRedirectUri(): string {
    if (document.baseURI.includes("localhost")) return encodeURI("http://localhost:4200")
    return encodeURI("https://pixbot.me")
  }

}
