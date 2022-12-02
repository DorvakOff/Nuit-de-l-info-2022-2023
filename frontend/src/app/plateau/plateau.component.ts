import {Component} from '@angular/core';

@Component({
  selector: 'app-plateau',
  templateUrl: './plateau.component.html',
  styleUrls: ['./plateau.component.css']
})
export class PlateauComponent {

  constructor() {
  }

  res = 0;

  updateRes(res: number) {
    this.res = res;
  }

  count(nb: number = 64) {
    let nbs: {row: number, col: number}[] = []
    let ax = 0;
    let ay = 0;
    for (let i = 0; i < 8; i++) {

    }
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8-row; col++) {

      }
    }
    return nbs
  }

  getPositionNb(nb: number, nbCol: number): {x: number, y: number} {
    return {x: 0, y: 0}
  }
}
