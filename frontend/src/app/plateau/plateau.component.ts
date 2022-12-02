import {Component, OnInit} from '@angular/core';
import {GetDataQuestionService} from "../get-data-question.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UserManagerService} from "../user-manager.service";
import {WebSocketService} from "../web-socket.service";
import {Game} from "../models/Game";

@Component({
  selector: 'app-plateau', templateUrl: './plateau.component.html', styleUrls: ['./plateau.component.css']
})
export class PlateauComponent implements OnInit {

  res = 4;
  game?: Game

  constructor(private questionService: GetDataQuestionService, private route: ActivatedRoute, private router: Router, userManager: UserManagerService, private websocketService: WebSocketService) {
    if (!userManager.user) {
      localStorage.setItem('redirect', window.location.pathname)
      this.router.navigateByUrl('/login')
      return
    }
    route.params.subscribe(params => {
      questionService.gameId = params['id']
      this.websocketService.openGameWebSocket(questionService.gameId, userManager.user!.id)
      this.websocketService.gameWebSocket.onmessage = (event) => {
        let data: Game = JSON.parse(event.data)
        this.game = data
      }
    });

    window.onbeforeunload = () => {
      this.websocketService.gameWebSocket.close()
    }
  }

  updateRes(res: number) {
    this.res = res;
  }

  count(nb: number = 64) {
    return Array(nb)
  }

  ngOnInit(): void {
    this.questionService.checkGame().subscribe(exists => {
      if (!exists) this.router.navigateByUrl('/')
    }, () => {
      this.router.navigateByUrl('/')
    })
  }

  ngOnDestroy(): void {
    if(this.websocketService.gameWebSocket) this.websocketService.gameWebSocket.close()
    this.questionService.gameId = ''
  }

}
