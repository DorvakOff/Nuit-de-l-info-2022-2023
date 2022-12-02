import {Component} from '@angular/core';

@Component({
  selector: 'app-plateau', templateUrl: './plateau.component.html', styleUrls: ['./plateau.component.css']
})
export class PlateauComponent implements OnInit {

  res = 0;

  constructor(private questionService: GetDataQuestionService, private route: ActivatedRoute, private router: Router) {
    route.params.subscribe((params) => {
      questionService.gameId = params['id']
    });
  }

  updateRes(res: number) {
    this.res = res;
  }

  count(nb: number = 64) {
    return Array(nb)
  }

  ngOnInit(): void {
    this.questionService.checkGame().subscribe(() => {
      this.questionService.getQuestion().subscribe((exists) => {
        if (!exists) this.router.navigateByUrl('/')
      })
    }, () => {
      this.router.navigateByUrl('/')
    })
  }

}
