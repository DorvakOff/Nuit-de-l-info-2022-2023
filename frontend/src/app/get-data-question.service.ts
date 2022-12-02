import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CarteComponent} from "./carte/carte.component";

@Injectable({
  providedIn: 'root'
})
export class GetDataQuestionService {
  gameId: string = '';

  constructor(private http: HttpClient) {
  }

  /**
   * Create a new game
   */
  public createGame(): Observable<{ gameId: string }> {
    let url = 'https://ndli.pixbot.me/game/create';
    return this.http.get<{ gameId: string }>(url);
  }

  public checkGame(): Observable<boolean> {
    let url = 'https://ndli.pixbot.me/game/exists?gameId=' + this.gameId;
    return this.http.get<boolean>(url);
  }

  /**
   * Get the next question
   * if the game is not created, create it
   */
  public getQuestion(): Observable<CarteComponent> {
    if (this.gameId === null) {
      this.createGame().subscribe(game => {
        this.gameId = game.gameId;
      });
    }
    let url = 'https://ndli.pixbot.me/question/pick?gameId=' + this.gameId;
    return this.http.get<CarteComponent>(url);
  }
}
