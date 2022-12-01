import {Case} from "./Case";
import {Joueur} from "./Joueur";
import {Des} from "./Des";
import {Carte} from "./Carte";

export class Plateau {
  public width: number = 10
  public height: number = 10
  public cases: Case[] = []
  public joueur: Joueur[] = []
  public des: Des | undefined;
  public cartes: Carte[] = []


  constructor(width: number, height: number, cases: Case[], joueur: Joueur[], des: Des | undefined, cartes: Carte[]) {
    this.width = width;
    this.height = height;
    this.cases = cases;
    this.joueur = joueur;
    this.des = des;
    this.cartes = cartes;
  }
}
