import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchesService } from 'src/app/matches.service';
import { IMatch } from 'src/app/models/match.model';

@Component({
  selector: 'app-match',
  templateUrl: './match.page.html',
  styleUrls: ['./match.page.scss'],
})
export class MatchPage {
  match: IMatch = { id: '', word: '', sister: '' };

  constructor(private router: Router, private matchService: MatchesService) {}

  addMatch(match: IMatch) {
    this.matchService.addMatch(match).subscribe(() => {
      alert('Add new match successful' + match);
      this.router.navigateByUrl('/tabs/tab2/');
    });
  }
}
