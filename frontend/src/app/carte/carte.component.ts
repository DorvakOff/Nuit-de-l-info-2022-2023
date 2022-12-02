import { Component } from '@angular/core';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent {
  public question: String = "Question";
  public rep1: String = "Réponse 1";
  public rep2: String = "Réponse 2";
  public rep3: String = "Réponse 3";
  public moreInformation: String = "Plus d'information";


  constructor(question: String, rep1: String, rep2: String, rep3: String, moreInformation: String) {
    this.question = question;
    this.rep1 = rep1;
    this.rep2 = rep2;
    this.rep3 = rep3;
    this.moreInformation = moreInformation;
  }

}
