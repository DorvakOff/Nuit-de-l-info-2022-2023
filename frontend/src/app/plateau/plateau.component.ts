import {Component, OnInit} from '@angular/core';
import {GetDataQuestionService} from "../get-data-question.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-plateau',
  templateUrl: './plateau.component.html',
  styleUrls: ['./plateau.component.css']
})
export class PlateauComponent implements OnInit {

  constructor(private questionService: GetDataQuestionService, private router: Router) {}

  res = 0;

  updateRes(res: number) {
    this.res = res;
  }

  count(nb: number = 64) {
    return Array(nb)
  }

  ngOnInit(): void {
    this.questionService.getQuestion().subscribe((value) => {

    })
  }

}
