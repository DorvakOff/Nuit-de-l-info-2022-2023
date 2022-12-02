import {Component, Input} from '@angular/core';
import {Carte} from "../models/Carte";

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent {

  @Input() carte: Carte | null = null;



  ngOnInit(): void {

  }
}
