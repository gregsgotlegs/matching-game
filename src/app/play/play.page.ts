import { Component } from '@angular/core';

@Component({
  selector: 'app-play',
  templateUrl: 'play.page.html',
  styleUrls: ['play.page.scss']
})
export class PlayPage {



  public clickCount = 0;

  public firstSelected: number;
  public secondSelected: number;

  public result = 0;

  public corrects = new Set();

  public list1 = [
    { name: "biff", sisterId: 1 },
    { name: "randy", sisterId: 2 },
    { name: "amanda", sisterId: 3 }
  ];

  public list2 = [
    { name: "buff", sisterId: 1 },
    { name: "rando", sisterId: 2 },
    { name: "panda", sisterId: 3 }
  ];

  constructor() {

  }

  public buttonClicked() {
    this.clickCount++;
  }

  public submit() {
    if (this.firstSelected === this.secondSelected) {
      // this.result = "Correct!";
      // console.log("correct");
      this.corrects.add(this.firstSelected);


    }

    // this.result = "Aw hellllll naw";
    this.result = this.corrects.size;
    if (this.result === this.list1.length) {
      //alert("you win!");
    }
  }

  public check(value: string) {
    return this.corrects.has(value);
  };


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

  public choiceSelected(value: string, id: number, which: number) {
    switch (which) {
      case 1:
        this.firstSelected = id;
        break;
      case 2:
        this.secondSelected = id;
        break;
    }
    console.log('%s is on side %s', value, which);
    this.submit();
  }
}
