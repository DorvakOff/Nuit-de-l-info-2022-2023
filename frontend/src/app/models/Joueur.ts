import {Carte} from "./Carte";
import {Malus} from "./Malus";
import {Bonus} from "./Bonus";

export class Joueur {
  public id: number = 0
  public name: string = ""

  public avatarUrl: string = ""

  public discriminator: string = ""
  public color: string = ""
  public position: number = 0
  public carte: Carte[] = []
  public malus: Malus[] = []
  public bonus: Bonus[] = []
  public isBlocked: boolean = false


  constructor(id: number, name: string, color: string, position: number = 0, carte: Carte[], malus: Malus[], bonus: Bonus[], isBlocked: boolean = false) {
    this.id = id;
    this.name = name;
    this.color = color;
    this.position = position;
    this.carte = carte;
    this.malus = malus;
    this.bonus = bonus;
    this.isBlocked = isBlocked;
  }
}
