export class Case {
  public id: number = 0
  public name: string = "Début"
  public icon: string = ""
  public color: string = ""
  public type: "Début" | "Fin" | "Carte" | "Evénement" | "Message" = "Début"


  /**
   * Constructor
   * @param name case name
   * @param icon icon path
   * @param color random color
   * @param type Début | Fin | Carte | Evénement | Message
   */
  constructor(name: string, icon: string, color: string, type: "Début" | "Fin" | "Carte" | "Evénement" | "Message") {
    this.id = this.id++
    this.name = name;
    this.icon = icon;
    this.color = color;
    this.type = type;
  }
}

