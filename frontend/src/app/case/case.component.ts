import {Component, Input, OnInit} from '@angular/core';
import {Case} from "../models/Case";

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.css']
})
export class CaseComponent implements OnInit {
  @Input() nbCase: number = 1;
  case: any;

  ngOnInit() {
    let random = Math.random() < 0.2;
    let type: "Début" | "Fin" | "Carte" | "Evénement" | "Message" = this.nbCase == 1 ? 'Début' : this.nbCase == 64 ? 'Fin' : random ? 'Evénement' : 'Carte';
    this.case = new Case("Case " + this.nbCase, "https://i.picsum.photos/50", "#000000", type);
  }

}
