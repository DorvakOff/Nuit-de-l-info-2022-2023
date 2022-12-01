export class Carte {
  public id: number = 0;
  public description: string = "";
  public question: string = "";
  public reponses: string[] = [];


  constructor(id: number, description: string, question: string, reponse: string[]) {
    this.id = id;
    this.description = description;
    this.question = question;
    this.reponses = reponse;
  }
}
