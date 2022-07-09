import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'matches',
    pathMatch: 'full',
  },

  {
    path: 'matches',
    loadChildren: () =>
      import('./matches/matches.module').then((m) => m.MatchesPageModule),
  },
  {
    path: 'match/:id',
    loadChildren: () =>
      import('./edit-match/edit-match.module').then(
        (m) => m.EditMatchPageModule
      ),
  },
  {
    path: 'addmatch',
    loadChildren: () =>
      import('./match/match.module').then((m) => m.MatchPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab2PageRoutingModule {}
