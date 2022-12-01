import {Component} from '@angular/core';

@Component({
  selector: 'app-des',
  templateUrl: './des.component.html',
  styleUrls: ['./des.component.css']
})
export class DesComponent {
  res: number = 0;

  constructor() {
  }

  public rollDice() {
    let cube = document.querySelector('.cube');
    if (cube) {
      this.res = Math.floor(Math.random() * 6) + 1;
      console.log(this.res);
      cube.className = 'cube pos' + this.res;
    }
  }
}
