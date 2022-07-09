import { Component, OnInit } from '@angular/core';
import { MatchesService } from '../matches.service';
import { IMatch } from '../models/match.model';

@Component({
  selector: 'app-play',
  templateUrl: 'play.page.html',
  styleUrls: ['play.page.scss'],
})
export class PlayPage implements OnInit {
  public clickCount = 0;

  public firstSelected: IMatch;
  public secondSelected: IMatch;

  public result = 0;

  public corrects = new Set();

  matches: IMatch[] = [];

  constructor(private matchService: MatchesService) {}

  ngOnInit(): void {
    this.matchService.getMatches().subscribe((data: IMatch[]) => {
      this.matches = data;
    });
  }

  public submit() {
    if (this.firstSelected === this.secondSelected) {
      // this.result = "Correct!";
      // console.log("correct");
      this.corrects.add(this.firstSelected);
    }

    // this.result = "Aw hellllll naw";
    this.result = this.corrects.size;
    if (this.result === this.matches.length) {
      //alert("you win!");
    }
  }

  public check(value: IMatch) {
    return this.corrects.has(value);
  }

  public deselected(which: number) {
    switch (which) {
      case 1:
        this.firstSelected = null;
        break;
      case 2:
        this.secondSelected = null;
        break;
    }
    console.log('%s side deselected', which);
  }

  public choiceSelected(item: IMatch, which: number) {
    switch (which) {
      case 1:
        this.firstSelected = item;
        break;
      case 2:
        this.secondSelected = item;
        break;
    }
    // console.log('%s is on side %s', value, which);
    this.submit();
  }
}
