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

}
