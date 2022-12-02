import {Joueur} from "./Joueur";

export interface Game {
  id: string
  players: Joueur[]
  questions: number[]
}
