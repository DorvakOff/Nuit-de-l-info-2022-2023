export class Carte {
  public question: String = "";
  public answers: String[] = [];
  public correctAnswer: number = 0;
  public explication: String = "";
  public id: number = 0;


  constructor(question: String, answers: String[], correctAnswer: number, explication: String, id: number) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
    this.explication = explication;
    this.id = id;
  }
}
