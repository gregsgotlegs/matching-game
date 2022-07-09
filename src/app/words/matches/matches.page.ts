import { Component, OnInit } from '@angular/core';
import { MatchesService } from 'src/app/matches.service';
import { IMatch } from 'src/app/models/match.model';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.page.html',
  styleUrls: ['./matches.page.scss'],
})
export class MatchesPage implements OnInit {
  matches: IMatch[] = [];

  constructor(private matchService: MatchesService) {}

  ngOnInit(): void {
    this.matchService.getMatches().subscribe((data: IMatch[]) => {
      this.matches = data;
    });
  }

  deleteMatch(match: IMatch) {
    const id = match.id ? match.id : '';
    this.matchService.deleteMatch(id).subscribe(() => {
      alert('Delete match : ');
    });
  }
}
