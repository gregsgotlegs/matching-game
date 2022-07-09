import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchesService } from 'src/app/matches.service';
import { IMatch } from 'src/app/models/match.model';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.page.html',
  styleUrls: ['./edit-match.page.scss'],
})
export class EditMatchPage implements OnInit {
  match: IMatch = { id: '', word: '', sister: '' };

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private matchService: MatchesService
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    if (id) {
      this.matchService.getMatch(id).subscribe((data: any) => {
        this.match = {
          id: data.id,
          word: data.word,
          sister: data.sister,
        };
      });
    }
  }

  updateMatch(match?: IMatch) {
    this.matchService.updateMatch(match, this.match.id).subscribe(() => {
      alert('Successful update');
      this.router.navigateByUrl('/tabs/tab2/matches');
    });
  }
}
